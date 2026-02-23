import { ConfigReturnType } from '../../../config/create';
/**
 * @param clusterId - The unique identifier of the cluster.
 * @param runway - The desired operational runway in days.
 */
type CalcDepositFromRunwayArgs = {
    clusterId: string;
    runway: number;
};
export declare const calcDepositFromRunway: (config: ConfigReturnType, { clusterId, runway }: CalcDepositFromRunwayArgs) => Promise<bigint>;
export {};
