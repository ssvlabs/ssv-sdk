import { describe, expect, it } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { Keystore } from '@chainsafe/bls-keystore';

describe('Check private key decryption', () => {
  it('Should decrypt without error', async () => {
    const keyStoreFilePath = path.join(__dirname, 'test.keystore.json');
    const keyStoreString: string = fs.readFileSync(keyStoreFilePath, 'utf-8');
    const keyStoreData = JSON.parse(keyStoreString);
    const keystore = Keystore.fromObject(keyStoreData);
    const password = 'testtest';
    const decryptedPrivateKey = await keystore.decrypt(password);
    const correctPrivateKeyHex = '63bc15d14d1460491535700fa2b6ac8873e1ede401cfc46e0c5ce77f00633d29';
    const decryptedPrivateKeyHex = Buffer.from(decryptedPrivateKey).toString('hex');

    expect(decryptedPrivateKey).toBeDefined();
    expect(decryptedPrivateKey.length).toEqual(32); // BLS private keys are 32 bytes
    expect(decryptedPrivateKeyHex).toEqual(correctPrivateKeyHex);
  });
});
