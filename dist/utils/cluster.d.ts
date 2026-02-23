import { GetClusterQuery } from '../graphql/graphql';
import { ClusterSnapshot as SolidityCluster } from '../types/contract-interactions';
import { Hex } from 'viem';
export declare const createClusterId: (ownerAddress: string, operatorIds: number[]) => string;
export declare const isClusterId: (clusterId: string) => boolean;
export declare const toSolidityCluster: (cluster: Pick<NonNullable<GetClusterQuery["cluster"]>, "active" | "balance" | "index" | "networkFeeIndex" | "validatorCount">) => SolidityCluster;
export declare const createEmptyCluster: (cluster?: Partial<SolidityCluster>) => SolidityCluster;
export declare const add0x: (value: string | Hex) => Hex;
