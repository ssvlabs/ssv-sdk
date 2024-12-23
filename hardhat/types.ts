export type Validator = {
  id: number;
  privateKey: string;
  publicKey: string;
};

export type Operator = {
  id: number;
  operatorKey: string;
  publicKey: string;
};

export type SSVConfig = {
  initialVersion: string,
  operatorMaxFeeIncrease: number,
  declareOperatorFeePeriod: number,
  executeOperatorFeePeriod: number,
  minimalOperatorFee: bigint,
  minimalBlocksBeforeLiquidation: number,
  minimumLiquidationCollateral: number,
  validatorsPerOperatorLimit: number,
  maximumOperatorFee: bigint,
};

export type Cluster = {
  validatorCount: number,
  networkFeeIndex: number,
  index: number,
  active: boolean,
  balance: bigint
}

export enum SSVModules {
  SSVOperators,
  SSVClusters,
  SSVDAO,
  SSVViews
};
