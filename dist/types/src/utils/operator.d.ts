import type { Address } from 'viem';
export declare const getOperatorIds: <T extends {
    id: number;
}[]>(operators: T) => number[];
export declare const decodeOperatorPublicKey: (publicKey: Address) => string;
