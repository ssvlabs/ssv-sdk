export declare const globals: {
    MAX_WEI_AMOUNT: bigint;
    CLUSTER_SIZES: {
        readonly QUAD_CLUSTER: 4;
        readonly SEPT_CLUSTER: 7;
        readonly DECA_CLUSTER: 10;
        readonly TRISKAIDEKA_CLUSTER: 13;
    };
    FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE: {
        QUAD_CLUSTER: number;
        SEPT_CLUSTER: number;
        DECA_CLUSTER: number;
        TRISKAIDEKA_CLUSTER: number;
    };
    BLOCKS_PER_DAY: bigint;
    OPERATORS_PER_PAGE: number;
    BLOCKS_PER_YEAR: bigint;
    DEFAULT_CLUSTER_PERIOD: number;
    NUMBERS_OF_WEEKS_IN_YEAR: number;
    MAX_VALIDATORS_COUNT_MULTI_FLOW: number;
    CLUSTER_VALIDITY_PERIOD_MINIMUM: number;
    OPERATOR_VALIDATORS_LIMIT_PRESERVE: number;
    MINIMUM_OPERATOR_FEE_PER_BLOCK: bigint;
    MIN_VALIDATORS_COUNT_PER_BULK_REGISTRATION: number;
    DEFAULT_ADDRESS_WHITELIST: string;
};
export type ClusterSize = (typeof globals.CLUSTER_SIZES)[keyof typeof globals.CLUSTER_SIZES];
export declare const registerValidatorsByClusterSizeLimits: {
    4: number;
    7: number;
    10: number;
    13: number;
};
