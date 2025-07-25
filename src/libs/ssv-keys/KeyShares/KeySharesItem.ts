import { IsOptional, ValidateNested, validateSync } from 'class-validator';
import { getAddress, toBytes, toHex } from 'viem';
import {
  buildSignature,
  hexArrayToBytes,
  privateToPublicKey,
  validateSignature,
} from '../helpers/web3.helper'

import type { IEncryptShare, IKeySharesPartialData, IOperator } from '@/libs/ssv-keys/interfaces'
import { KeySharesData } from '@/libs/ssv-keys/KeyShares/KeySharesData/KeySharesData'
import { SSVKeysException } from '../exceptions/base'
import { OwnerAddressFormatError, OwnerNonceFormatError } from '../exceptions/keystore'
import { operatorSortedList } from '../helpers/operator.helper'
import { KeySharesPayload } from './KeySharesData/KeySharesPayload'

export interface IKeySharesPayloadData {
  publicKey: string
  operators: IOperator[]
  encryptedShares: IEncryptShare[]
}

export interface IKeySharesToSignatureData {
  ownerAddress: string
  ownerNonce: number
  privateKey: string
}

export interface IKeySharesFromSignatureData {
  ownerAddress: string
  ownerNonce: number
  publicKey: string
}

const SIGNATURE_LENGTH = 192
const PUBLIC_KEY_LENGTH = 96

/**
 * Key shares file data interface.
 */
export class KeySharesItem {
  @IsOptional()
  @ValidateNested()
  public data: KeySharesData

  @IsOptional()
  @ValidateNested()
  public payload: KeySharesPayload

  @IsOptional()
  public error: SSVKeysException | undefined = undefined

  constructor() {
    this.data = new KeySharesData()
    this.payload = new KeySharesPayload()
  }

  /**
   * Build payload from operators list, encrypted shares and validator public key
   */
  async buildPayload(
    metaData: IKeySharesPayloadData,
    toSignatureData: IKeySharesToSignatureData,
  ): Promise<any> {
    const { ownerAddress, ownerNonce, privateKey } = toSignatureData

    if (!Number.isInteger(ownerNonce) || ownerNonce < 0) {
      throw new OwnerNonceFormatError(ownerNonce, 'Owner nonce is not positive integer')
    }

    let address
    try {
      address = getAddress(ownerAddress)
    } catch {
      throw new OwnerAddressFormatError(
        ownerAddress,
        'Owner address is not a valid Ethereum address',
      )
    }

    const payload = this.payload.build({
      publicKey: metaData.publicKey,
      operatorIds: operatorSortedList(metaData.operators).map((operator) => operator.id),
      encryptedShares: metaData.encryptedShares,
    })

    const signature = await buildSignature(`${address}:${ownerNonce}`, privateKey)
    const signSharesBytes = hexArrayToBytes([signature, payload.sharesData])

    payload.sharesData = `0x${signSharesBytes.toString('hex')}`

    // verify signature
    await this.validateSingleShares(payload.sharesData, {
      ownerAddress,
      ownerNonce,
      publicKey: await privateToPublicKey(privateKey),
    })

    return payload
  }

  async validateSingleShares(
    shares: string,
    fromSignatureData: IKeySharesFromSignatureData,
  ): Promise<void> {
    const { ownerAddress, ownerNonce, publicKey } = fromSignatureData

    if (!Number.isInteger(ownerNonce) || ownerNonce < 0) {
      throw new OwnerNonceFormatError(ownerNonce, 'Owner nonce is not positive integer')
    }

    const address = getAddress(ownerAddress)
    const signaturePt = shares.replace('0x', '').substring(0, SIGNATURE_LENGTH)

    await validateSignature(`${address}:${ownerNonce}`, `0x${signaturePt}`, publicKey)
  }

  /**
   * Build shares from bytes string and operators list length
   * @param bytes
   * @param operatorCount
   */
  buildSharesFromBytes(
    bytes: string,
    operatorCount: number,
  ): { sharesPublicKeys: string[]; encryptedKeys: string[] } {
    // Validate the byte string format (hex string starting with '0x')
    if (!bytes.startsWith('0x') || !/^(0x)?[0-9a-fA-F]*$/.test(bytes)) {
      throw new SSVKeysException('Invalid byte string format')
    }

    // Validate the operator count (positive integer)
    if (operatorCount <= 0 || !Number.isInteger(operatorCount)) {
      throw new SSVKeysException('Invalid operator count')
    }

    const sharesPt = bytes.slice(2 + SIGNATURE_LENGTH);

    const pkSplit = sharesPt.substring(0, operatorCount * PUBLIC_KEY_LENGTH)
    const pkBytes = toBytes('0x' + pkSplit);
    // const sharesPublicKeys = this.splitArray(operatorCount, pkArray).map((item) => hexlify(item))
    const sharesPublicKeys = this.splitArray(operatorCount, pkBytes).map((item) => toHex(item));

    const eSplit = bytes.substring(operatorCount * PUBLIC_KEY_LENGTH)
    const eBytes = toBytes('0x' + eSplit);
    const encryptedKeys = this.splitArray(operatorCount, eBytes).map((item) =>
      Buffer.from(toHex(item).slice(2), 'hex').toString('base64'),
    );

    return { sharesPublicKeys, encryptedKeys }
  }

  /**
   * Updates the current instance with partial data and payload, and validates.
   */
  update(data: IKeySharesPartialData): void {
    this.data.update(data)
    this.validate()
  }

  /**
   * Validate everything
   */
  validate(): void {
    validateSync(this)
  }

  /**
   * Stringify key shares to be ready for saving in file.
   */
  toJson(): string {
    return JSON.stringify(
      {
        data: this.data || null,
        payload: this.payload || null,
      },
      null,
      2,
    )
  }

  private splitArray(parts: number, arr: Uint8Array) {
    const partLength = Math.floor(arr.length / parts)
    const partsArr = []
    for (let i = 0; i < parts; i++) {
      const start = i * partLength
      const end = start + partLength
      partsArr.push(arr.slice(start, end))
    }
    return partsArr;
  }

  /**
   * Initialise from JSON or object data.
   */
  static async fromJson(content: string | unknown): Promise<KeySharesItem> {
    const body = typeof content === 'string' ? JSON.parse(content) : content
    const instance = new KeySharesItem()
    try {
      instance.data.update(body.data)
      instance.payload.update(body.payload)
      instance.validate()
      // Custom validation: verify signature
      await instance.validateSingleShares(instance.payload.sharesData, {
        ownerAddress: instance.data.ownerAddress as string,
        ownerNonce: instance.data.ownerNonce as number,
        publicKey: instance.data.publicKey as string,
      })
    } catch (e: any) {
      instance.error = e
    }
    return instance
  }
}

export type IKeySharesItem = InstanceType<typeof KeySharesItem>
