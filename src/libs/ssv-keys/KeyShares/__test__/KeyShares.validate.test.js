import { beforeAll, describe, expect, it, } from 'vitest';
import { SSVKeysException } from '@/libs/ssv-keys/exceptions/base';
import { KeySharesItem } from '@/libs/ssv-keys/KeyShares/KeySharesItem';
import mockKeySharesItemWithOperators from './mock-key-shares/item-with-operators.json';
let keySharesItem;
describe('KeyShares.validateSingleShares', () => {
    beforeAll(async () => {
        keySharesItem = new KeySharesItem();
    });
    it('should validate successfully with correct inputs', async () => {
        const shares = mockKeySharesItemWithOperators.payload.sharesData;
        const fromSignatureData = {
            ownerNonce: mockKeySharesItemWithOperators.data.ownerNonce,
            publicKey: mockKeySharesItemWithOperators.data.publicKey,
            ownerAddress: mockKeySharesItemWithOperators.data.ownerAddress,
        };
        await expect(keySharesItem.validateSingleShares(shares, fromSignatureData)).resolves.toBeUndefined();
    });
    it('should throw error for invalid owner nonce', async () => {
        const shares = mockKeySharesItemWithOperators.payload.sharesData;
        const fromSignatureData = {
            ownerNonce: -1, // Invalid nonce
            publicKey: mockKeySharesItemWithOperators.data.publicKey,
            ownerAddress: mockKeySharesItemWithOperators.data.ownerAddress,
        };
        await expect(keySharesItem.validateSingleShares(shares, fromSignatureData)).rejects.toThrow('Owner nonce is not positive integer');
    });
    it('should throw BLS error for invalid signature', async () => {
        const invalidSignature = '0x123'; // An altered or incorrectly generated signature
        const fromSignatureData = {
            ownerNonce: 2,
            publicKey: mockKeySharesItemWithOperators.data.publicKey,
            ownerAddress: mockKeySharesItemWithOperators.data.ownerAddress,
        };
        await expect(keySharesItem.validateSingleShares(invalidSignature, fromSignatureData)).rejects.toThrowError();
    });
    it('should throw SSVKeysException error type', async () => {
        const signature = mockKeySharesItemWithOperators.payload.sharesData;
        const fromSignatureData = {
            ownerNonce: mockKeySharesItemWithOperators.data.ownerNonce + 1,
            publicKey: mockKeySharesItemWithOperators.data.publicKey,
            ownerAddress: mockKeySharesItemWithOperators.data.ownerAddress,
        };
        await expect(keySharesItem.validateSingleShares(signature, fromSignatureData)).rejects.toMatchObject({
            name: 'SingleSharesSignatureInvalid',
            message: 'Single shares signature is invalid'
        });
        // Also verify it's an instance of SSVKeysException
        await expect(keySharesItem.validateSingleShares(signature, fromSignatureData)).rejects.toBeInstanceOf(SSVKeysException);
    });
});
