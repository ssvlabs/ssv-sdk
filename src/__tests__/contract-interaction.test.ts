import { createMockConfig } from '@/mock/config'
import { SSVSDK } from '@/sdk'
import hre from 'hardhat'
import { CONFIG, initializeContract } from 'hardhat/contract-helpers'
import { getAddress, parseEther } from 'viem'
import { describe, expect, it } from 'vitest'

describe('SSV Keys', async () => {
  await hre.run('compile')
  const { ssvNetwork, ssvNetworkViews, ssvToken, wallets, publicClient } =
    await initializeContract()

  const sdk = new SSVSDK(
    createMockConfig({
      addresses: {
        setter: ssvNetwork.address,
        getter: ssvNetworkViews.address,
        token: ssvToken.address,
      },
      publicClient,
      walletClient: wallets[0],
      chain: publicClient.chain,
    }),
  )

  it('can write to the SSVNetwork contract', async () => {
    const receipt = await sdk.operators
      .registerOperator({
        args: {
          publicKey: '0x10',
          fee: CONFIG.minimalOperatorFee,
          setPrivate: true,
        },
      })
      .then((tx) => tx.wait())
    expect(receipt).toBeDefined()

    const operatorAddedEvent = receipt.events.find(
      (
        event,
      ): event is typeof event & {
        eventName: 'OperatorAdded'
        args: { operatorId: bigint; publicKey: string; fee: bigint; owner: string }
      } => event.eventName === 'OperatorAdded',
    )
    expect(operatorAddedEvent).toBeDefined()
    expect(operatorAddedEvent?.args.operatorId).toBe(1n)
    expect(operatorAddedEvent?.args.publicKey).toBe('0x10')
    expect(operatorAddedEvent?.args.fee).toBe(CONFIG.minimalOperatorFee)
    expect(operatorAddedEvent?.args.owner).toBe(
      getAddress(sdk.config.walletClient.account!.address),
    )
  })

  it('can read from SSVNetworkViews contract', async () => {
    const limit = await sdk.contract.ssv.read.getValidatorsPerOperatorLimit()
    expect(limit).toBe(500)

    const ssvBalance = await sdk.contract.token.read.balanceOf({
      account: wallets[0].account.address,
    })
    expect(ssvBalance).toBe(parseEther('1000'))
  })
  it('can read from SSVToken contract', async () => {
    const limit = await sdk.contract.ssv.read.getValidatorsPerOperatorLimit()
    expect(limit).toBe(500)

    const ssvBalance = await sdk.contract.token.read.balanceOf({
      account: wallets[0].account.address,
    })
    expect(ssvBalance).toBe(parseEther('1000'))
  })
})
