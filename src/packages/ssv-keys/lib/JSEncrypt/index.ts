import type JSEncrypt from 'jsencrypt';

let index: typeof JSEncrypt;

if (typeof window !== 'undefined' && window.crypto) {
  // Browser environment
  index = (await import('jsencrypt')).default;
} else {
  // Node.js environment
  // Use dynamic import for Node.js environment to avoid issues with bundlers
  index = (await import('node-jsencrypt')).default;
}

export default index;
