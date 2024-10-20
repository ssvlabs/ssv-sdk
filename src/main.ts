import keystores from './mock/keystore.json';
import keyshares from './mock/keyshares.json';
import { SSVKeys } from './packages/ssv-keys/lib/SSVKeys';
import { KeyShares } from './packages/ssv-keys/lib/KeyShares/KeyShares';

const ssvKeys = new SSVKeys();

ssvKeys.extractKeys(JSON.stringify(keystores), '123123123').then((res) => {
  console.log('res:', res);
});

KeyShares.fromJson(keyshares).then((res) => {
  console.log('res:', res);
});
