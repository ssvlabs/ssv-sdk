import { Prettify } from '../types/utils';
export declare const computeDailyAmount: (value: bigint, days: number) => bigint;
type LiquidationCollateralCostArgs = {
    networkFee: bigint;
    operatorsFee: bigint;
    liquidationCollateralPeriod: bigint;
    minimumLiquidationCollateral: bigint;
    effectiveBalance: bigint;
};
export declare const computeLiquidationCollateralCostPerValidator: ({ networkFee, operatorsFee, liquidationCollateralPeriod, minimumLiquidationCollateral, effectiveBalance, }: LiquidationCollateralCostArgs) => bigint;
type ComputeFundingCostArgs = Prettify<{
    fundingDays: number;
    effectiveBalance?: bigint;
} & LiquidationCollateralCostArgs>;
export declare const computeFundingCost: (args: ComputeFundingCostArgs) => {
    perValidator: {
        networkCost: bigint;
        operatorsCost: bigint;
        liquidationCollateral: bigint;
    };
    subtotal: {
        networkCost: bigint;
        operatorsCost: bigint;
        liquidationCollateral: bigint;
    };
    total: bigint;
    effectiveBalance: bigint;
};
export {};
