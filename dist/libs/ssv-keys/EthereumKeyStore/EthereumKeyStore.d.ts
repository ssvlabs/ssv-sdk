/**
 * Decrypt private key from key store data
 * Supports key store versions: v1, v3, v4
 *
 * Example of usage (Node env):
 *
 *  const keyStoreFilePath = path.join(process.cwd(), 'validator_keys', 'keystore.json');
 *  const keyStoreString: string = fs.readFileSync(keyStoreFilePath).toString();
 *  const keyStoreData = JSON.parse(keyStoreString);
 *  const keyStore = new EthereumKeyStore(keyStoreData);
 *  const password = 'testtest';
 *  console.log('Private Key:', await keyStore.getPrivateKey(password));
 */
declare class EthereumKeyStore {
    private readonly keyStoreData;
    private privateKey;
    constructor(keyStoreData: any);
    getPrivateKey(password?: string): Promise<string>;
    private fromV3;
    private fromCustomV4;
    private runCipherBuffer;
}
export default EthereumKeyStore;
