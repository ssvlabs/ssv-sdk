// let index: any;
//
// try {
//   window.crypto;
//   index = require('bls-eth-wasm/browser');
// } catch {
//   index = require('bls-eth-wasm');
// }
//
// export default index;

import bls from 'bls-eth-wasm';

(async () => {
  await bls.init(bls.BLS12_381);
})();

export default bls;
