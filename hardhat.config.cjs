/* eslint-disable no-undef */
// require('@nomicfoundation/hardhat-toolbox')
require('@nomicfoundation/hardhat-viem')
require('@openzeppelin/hardhat-upgrades')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.4',
      },
      {
        version: '0.8.18',
      },
      {
        version: '0.8.24',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
          evmVersion: 'cancun',
        },
      },
    ],
  },
  paths: {
    root: './hardhat',
    sources: './contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
    strict: false,
  }
}
