// import JSEncrypt from '@/libs/ssv-keys/JSEncrypt'
import { ForgeEncrypt } from '../utils';
function debugKeyValidation() {
    console.log('🔍 Debugging key validation behavior...\n');
    const invalidKeys = [
        '-----BEGIN PUBLIC KEY-----\ninvalid\n-----END PUBLIC KEY-----',
        'not-a-key',
        '',
        '-----BEGIN RSA PUBLIC KEY-----\ninvalid\n-----END RSA PUBLIC KEY-----',
        'short'
    ];
    invalidKeys.forEach((invalidKey, index) => {
        console.log(`\n--- Test ${index + 1}: "${invalidKey}" ---`);
        // Test JSEncrypt
        // const jsEncrypt = new JSEncrypt()
        // try {
        //   jsEncrypt.setPublicKey(invalidKey)
        //   console.log('❌ JSEncrypt: ACCEPTED (should have failed)')
        // } catch (error) {
        //   console.log(`✅ JSEncrypt: REJECTED - ${error}`)
        // }
        // Test ForgeEncrypt
        const forgeEncrypt = new ForgeEncrypt();
        try {
            forgeEncrypt.setPublicKey(invalidKey);
            console.log('❌ ForgeEncrypt: ACCEPTED (should have failed)');
        }
        catch (error) {
            console.log(`✅ ForgeEncrypt: REJECTED - ${error}`);
        }
    });
    console.log('\n🔍 Testing with valid key for comparison...');
    const validKey = '-----BEGIN RSA PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3z14ONoa6fgWBv0CdZs\nWQz3aKmaxael0lyyHEr3nk52Zkbs5KsPfvVK/6ChvlJUzsoqtgJ2Rjc9REqMFy3R\nV2hY+AsBJ8etSGWJNdCAUXab0yLKdMtub/AsR6XGXO32Zi32y5aq5mCJUCFPjZX/\nzbC7umnfNWqEcaiEaLi4mRejIYeQZcyX0+ohGJ3ZbKlz57RI7IkbnrAJz0mKVJD\nLb2ojcsvzXP6cTEY7tY3KQnvO61PcN7UFX2KHOn5Fmm1QiMZP5MAJe3b34cCwlAY\n2xhH4kGOfneaLoWdf1zvqGvEtlW4ShdRmTa1qQjtaxbvSe9ZAaquegEdLAuTdu4\nwIDAQAB\n-----END RSA PUBLIC KEY-----';
    // const jsEncrypt = new JSEncrypt()
    const forgeEncrypt = new ForgeEncrypt();
    // try {
    //   jsEncrypt.setPublicKey(validKey)
    //   console.log('✅ JSEncrypt: Valid key accepted')
    // } catch (error) {
    //   console.log(`❌ JSEncrypt: Valid key rejected - ${error}`)
    // }
    try {
        forgeEncrypt.setPublicKey(validKey);
        console.log('✅ ForgeEncrypt: Valid key accepted');
    }
    catch (error) {
        console.log(`❌ ForgeEncrypt: Valid key rejected - ${error}`);
    }
}
debugKeyValidation();
