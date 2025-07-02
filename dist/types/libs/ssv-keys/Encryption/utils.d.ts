import * as forge from 'node-forge';
/**
 * Node-forge implementation of JSEncrypt-like functionality
 * Designed to match JSEncrypt's behavior exactly, including permissive key validation
 */
export declare class ForgeEncrypt {
    private publicKey;
    private privateKey;
    constructor();
    /**
     * Set the public key (equivalent to JSEncrypt.setPublicKey)
     * Matches JSEncrypt's permissive behavior - doesn't throw on invalid keys
     */
    setPublicKey(publicKeyPem: string): void;
    /**
     * Set the private key (equivalent to JSEncrypt.setPrivateKey)
     * Matches JSEncrypt's permissive behavior - doesn't throw on invalid keys
     */
    setPrivateKey(privateKeyPem: string): void;
    /**
     * Encrypt data with public key (equivalent to JSEncrypt.encrypt)
     * Returns base64 encoded encrypted data or false if encryption fails
     */
    encrypt(data: string): string | false;
    /**
     * Decrypt data with private key (equivalent to JSEncrypt.decrypt)
     * Expects base64 encoded encrypted data, returns false if decryption fails
     */
    decrypt(encryptedData: string): string | false;
    /**
     * Get the public key in PEM format
     */
    getPublicKey(): string;
    /**
     * Get the private key in PEM format
     */
    getPrivateKey(): string;
}
/**
 * Validate RSA public key using node-forge (equivalent to JSEncrypt validation)
 * Note: This function is more strict than JSEncrypt for external validation
 */
export declare function validateRsaPublicKey(publicKeyPem: string): boolean;
/**
 * Generate a new RSA key pair (for testing purposes)
 */
export declare function generateRsaKeyPair(keySize?: number): {
    publicKey: string;
    privateKey: string;
};
/**
 * Convert PEM key to node-forge key object
 */
export declare function pemToPublicKey(pem: string): forge.pki.rsa.PublicKey;
export declare function pemToPrivateKey(pem: string): forge.pki.rsa.PrivateKey;
