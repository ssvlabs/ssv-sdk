export declare const bigintMax: (...args: bigint[]) => bigint;
export declare const bigintMin: (...args: bigint[]) => bigint;
export declare const bigintRound: (value: bigint, precision: bigint) => bigint;
export declare const bigintFloor: (value: bigint, precision?: bigint) => bigint;
export declare const bigintAbs: (n: bigint) => bigint;
/**
 * Checks if the difference between two bigints exceeds a specified tolerance.
 *
 * @param {bigint} a - The first bigint value.
 * @param {bigint} b - The second bigint value.
 * @param {bigint} [tolerance] - default is `parseUnits("0.0001", 18)`.
 */
export declare const isBigIntChanged: (a: bigint, b: bigint, tolerance?: bigint) => boolean;
export declare const roundOperatorFee: (fee: bigint, precision?: bigint) => bigint;
type NoBigints<T> = {
    [K in keyof T]: T[K] extends bigint ? string : T[K] extends bigint ? NoBigints<T[K]> : T[K];
};
/**
 * Converts bigints to strings in an object or array.
 * @param anything - The object or array to convert.
 * @returns A new object or array with bigints converted to strings.
 * @example
 * stringifyBigints(1n) → "1"
 * stringifyBigints([1n]) → ["1"]
 * stringifyBigints({a: 1n, b: { c: 1n }}) → {a: "1", b: {c: "1"}}
 */
export declare const stringifyBigints: <T>(anything: T) => NoBigints<T>;
export declare const bigintifyNumbers: (numbers: readonly number[] | number[]) => bigint[];
export {};
