# 1.0.0 (2026-02-12)

### Features

- add support for ETH fees in SSV
- update ABIs and methods for new contracts/events
- add DAO module with methods, plus cluster/operator methods after ETH fees switch
- add computeFundingCost and rename a function
- add effectiveBalance to GraphQL queries (GetClusters/GetClusterBalance)
- expand argument types to accept raw share payload; harden tests
- add missing amount arg for migrate ETH cluster
- update contract addresses
- unify argument notation for generateKeyShares

### Fixes

- adjust cluster balance calculation logic
- use scaling coefficient and vUnits for getClusterBalance
- fix calcDepositFromRunway to use validator units
- fix CI

### Chore

- standardize code style (semicolons, single quotes)

# 0.2.0 (2024-04-17)

### Features

- pre-release boilerplate ([f15717e](https://github.com/crper/rollup-typescript-lib-boilerplate/commit/f15717e592462317754f479414db0fa8676c76b6))
