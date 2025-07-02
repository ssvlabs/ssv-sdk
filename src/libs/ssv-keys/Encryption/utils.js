import * as forge from 'node-forge';
/**
 * Node-forge implementation of JSEncrypt-like functionality
 * Designed to match JSEncrypt's behavior exactly, including permissive key validation
 */
export class ForgeEncrypt {
    constructor() {
        Object.defineProperty(this, "publicKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "privateKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        // Options are not used in this implementation but kept for API compatibility
    }
    /**
     * Set the public key (equivalent to JSEncrypt.setPublicKey)
     * Matches JSEncrypt's permissive behavior - doesn't throw on invalid keys
     */
    setPublicKey(publicKeyPem) {
        try {
            this.publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
        }
        catch (error) {
            // JSEncrypt doesn't throw on invalid keys, it just silently fails
            // We'll set the key to null and let encryption fail later
            this.publicKey = null;
        }
    }
    /**
     * Set the private key (equivalent to JSEncrypt.setPrivateKey)
     * Matches JSEncrypt's permissive behavior - doesn't throw on invalid keys
     */
    setPrivateKey(privateKeyPem) {
        try {
            this.privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
        }
        catch (error) {
            // JSEncrypt doesn't throw on invalid keys, it just silently fails
            // We'll set the key to null and let decryption fail later
            this.privateKey = null;
        }
    }
    /**
     * Encrypt data with public key (equivalent to JSEncrypt.encrypt)
     * Returns base64 encoded encrypted data or false if encryption fails
     */
    encrypt(data) {
        if (!this.publicKey) {
            // JSEncrypt returns false when no key is set or key is invalid
            return false;
        }
        try {
            const encrypted = this.publicKey.encrypt(data, 'RSAES-PKCS1-V1_5');
            return forge.util.encode64(encrypted);
        }
        catch (error) {
            // JSEncrypt returns false on encryption failure
            return false;
        }
    }
    /**
     * Decrypt data with private key (equivalent to JSEncrypt.decrypt)
     * Expects base64 encoded encrypted data, returns false if decryption fails
     */
    decrypt(encryptedData) {
        if (!this.privateKey) {
            // JSEncrypt returns false when no key is set or key is invalid
            return false;
        }
        try {
            const encryptedBytes = forge.util.decode64(encryptedData);
            const decrypted = this.privateKey.decrypt(encryptedBytes, 'RSAES-PKCS1-V1_5');
            return decrypted;
        }
        catch (error) {
            // JSEncrypt returns false on decryption failure
            return false;
        }
    }
    /**
     * Get the public key in PEM format
     */
    getPublicKey() {
        if (!this.publicKey) {
            throw new Error('Public key not set');
        }
        return forge.pki.publicKeyToPem(this.publicKey);
    }
    /**
     * Get the private key in PEM format
     */
    getPrivateKey() {
        if (!this.privateKey) {
            throw new Error('Private key not set');
        }
        return forge.pki.privateKeyToPem(this.privateKey);
    }
}
/**
 * Validate RSA public key using node-forge (equivalent to JSEncrypt validation)
 * Note: This function is more strict than JSEncrypt for external validation
 */
export function validateRsaPublicKey(publicKeyPem) {
    try {
        forge.pki.publicKeyFromPem(publicKeyPem);
        return true;
    }
    catch (error) {
        return false;
    }
}
/**
 * Generate a new RSA key pair (for testing purposes)
 */
export function generateRsaKeyPair(keySize = 2048) {
    const keypair = forge.pki.rsa.generateKeyPair(keySize);
    return {
        publicKey: forge.pki.publicKeyToPem(keypair.publicKey),
        privateKey: forge.pki.privateKeyToPem(keypair.privateKey)
    };
}
/**
 * Convert PEM key to node-forge key object
 */
export function pemToPublicKey(pem) {
    return forge.pki.publicKeyFromPem(pem);
}
export function pemToPrivateKey(pem) {
    return forge.pki.privateKeyFromPem(pem);
}
