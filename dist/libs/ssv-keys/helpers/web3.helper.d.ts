/**
 * This function transforms an array of hexadecimal strings into a single Node.js Buffer.
 * It employs viem.toBytes to convert each hex string into a Uint8Array, flattens them into a single array, and converts that to a Buffer.
 *
 * @param {string[]} hexArr - An array of hexadecimal strings. Each string can represent bytes of arbitrary length. *
 * @returns {Buffer} - A Node.js Buffer that concatenates the bytes represented by the hexadecimal strings in the input array.
 *
 */
declare const hexArrayToBytes: (hexArr: string[]) => Buffer;
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
declare const buildSignature: (dataToSign: string, privateKeyHex: string) => Promise<string>;
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
declare const validateSignature: (signedData: string, signatureHex: string, publicKey: string) => Promise<void>;
export declare const privateToPublicKey: (privateKey: string) => Promise<string>;
export { hexArrayToBytes, buildSignature, validateSignature };
