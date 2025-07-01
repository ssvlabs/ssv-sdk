import { keccak256, toBytes, fromHex } from 'viem';
import bls from '../BLS';
import { SingleSharesSignatureInvalid } from '../exceptions/bls';

/**
 * This function transforms an array of hexadecimal strings into a single Node.js Buffer.
 * It employs viem.toBytes to convert each hex string into a Uint8Array, flattens them into a single array, and converts that to a Buffer.
 *
 * @param {string[]} hexArr - An array of hexadecimal strings. Each string can represent bytes of arbitrary length. *
 * @returns {Buffer} - A Node.js Buffer that concatenates the bytes represented by the hexadecimal strings in the input array.
 *
 */
const hexArrayToBytes = (hexArr: string[]): Buffer => {
  const uint8Array = new Uint8Array(hexArr.flatMap(hex => Array.from(toBytes(hex))));
  return Buffer.from(uint8Array);
}

/**
 * Asynchronously creates a BLS signature for given data using a private key.
 *
 * @param {string} dataToSign - The data to be signed.
 * @param {string} privateKeyHex - Hexadecimal representation of the private key.
 * @returns {Promise<string>} - A promise that resolves to the BLS signature in hexadecimal format.
 *
 * The function initializes the BLS library if needed, deserializes the private key from a hexadecimal string,
 * computes the Keccak-256 hash of the data, signs the hashed data using the deserialized private key,
 * and returns the signature in hexadecimal format, prefixed with '0x'.
 */
const buildSignature = async(dataToSign: string, privateKeyHex: string): Promise<string> => {
  const privateKey = bls.deserializeHexStrToSecretKey(privateKeyHex.replace('0x', ''));

  const messageHash = keccak256(toBytes(dataToSign));
  const messageBytes = fromHex(messageHash, 'bytes');
  const signature = privateKey.sign(messageBytes);
  const signatureHex = signature.serializeToHexStr();
  return `0x${signatureHex}`;
}

/**
 * Asynchronously validates a BLS signature for given signed data.
 *
 * @param {string} signedData - Data that has been signed.
 * @param {string} signatureHex - Hexadecimal representation of the BLS signature.
 * @param {string} publicKey - Hexadecimal representation of the public key.
 * @throws {SingleSharesSignatureInvalid} - Throws an error if the signature is invalid.
 * @returns {Promise<void>} - Resolves when the signature is successfully verified.
 *
 * The function initializes the BLS library if needed, deserializes the public key and signature from hexadecimal strings,
 * computes the Keccak-256 hash of the signed data, and verifies the signature using the deserialized public key.
 */
const validateSignature = async(signedData: string, signatureHex: string, publicKey: string): Promise<void> => {
  const blsPublicKey = bls.deserializeHexStrToPublicKey(publicKey.replace('0x', ''));
  const signature = bls.deserializeHexStrToSignature(signatureHex.replace('0x', ''));

  const messageHashHex = keccak256(toBytes(signedData));
  const messageHashBytes = fromHex(messageHashHex, 'bytes');

  if (!blsPublicKey.verify(signature, messageHashBytes)) {
    throw new SingleSharesSignatureInvalid(signatureHex, 'Single shares signature is invalid');
  }
}

export const privateToPublicKey = async(privateKey: string): Promise<string> => {
  return `0x${bls.deserializeHexStrToSecretKey(privateKey.replace('0x', '')).getPublicKey().serializeToHexStr()}`;
}

export { hexArrayToBytes, buildSignature, validateSignature };

