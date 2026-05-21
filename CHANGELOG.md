# 1.0.2 (2026-05-21)

### Features

- export SDK keyshares in webapp-ready file format
- return snapshot block numbers from SDK read methods

### Fixes

- normalize snapshot-aware subgraph responses, including `getClusterBalance`
- tighten snapshot and keyshares export helpers
- update internal SDK consumers for snapshot-aware read responses

### Refactors

- make `getClusterSnapshot` the canonical snapshot API
- return owner nonce as a number

### Tests

- add coverage for snapshot-aware subgraph read responses

### Docs

- clarify webapp operator key format checks
- update broken README logo asset

# 1.0.1 (2026-04-20)

### Fixes

- restore `sdk.api.getClusterSnapshot` as a deprecated alias to `sdk.api.toSolidityCluster` for `0.1.x` compatibility
- add explicit API method name mapping for `0.1.x` vs `1.x` in `README.md`

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
