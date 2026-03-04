/* eslint-disable no-undef */
// require('@nomicfoundation/hardhat-toolbox')
require('@nomicfoundation/hardhat-viem');
require('@openzeppelin/hardhat-upgrades');
const { subtask } = require('hardhat/config');
const {
  TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS,
} = require('hardhat/builtin-tasks/task-names');

subtask(TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS, async (_, __, runSuper) => {
  const sourcePaths = await runSuper();
  const includedTestSourceSuffixes = ['/contracts/test/mocks/MockCSSV.sol'];

  return sourcePaths.filter((path) => {
    if (!path.includes('/contracts/test/')) return true;
    return includedTestSourceSuffixes.some((includedTestSourceSuffix) =>
      path.endsWith(includedTestSourceSuffix),
    );
  });
});

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
          viaIR: true,
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
  },
};
