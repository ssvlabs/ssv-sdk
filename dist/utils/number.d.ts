export declare const numberFormatter: Intl.NumberFormat;
export declare const _percentageFormatter: Intl.NumberFormat;
export declare const percentageFormatter: {
    format: (value?: number) => string;
};
export declare const bigintFormatter: Intl.NumberFormat;
export declare const ethFormatter: Intl.NumberFormat;
export declare const formatSSV: (num: bigint, decimals?: number) => string;
export declare const formatBigintInput: (num: bigint, decimals?: number) => string;
declare const units: {
    readonly seconds: 1000;
    readonly minutes: 60000;
    readonly hours: 3600000;
    readonly days: 86400000;
    readonly weeks: 604800000;
    readonly months: 2629746000;
    readonly years: 31556952000;
};
export declare const ms: (value: number, unit: keyof typeof units) => number;
export declare const sortNumbers: <T extends number | bigint>(numbers: T[]) => T[];
export {};
