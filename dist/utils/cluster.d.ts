import { GetClusterQuery } from '../graphql/graphql';
import { ClusterSnapshot } from '../types/contract-interactions';
import { Hex } from 'viem';
export declare const createClusterId: (ownerAddress: string, operatorIds: number[]) => string;
export declare const isClusterId: (clusterId: string) => boolean;
export declare const getClusterSnapshot: (cluster: NonNullable<GetClusterQuery["cluster"]>) => ClusterSnapshot;
export declare const createEmptyCluster: (cluster?: Partial<ClusterSnapshot>) => ClusterSnapshot;
export declare const add0x: (value: string | Hex) => Hex;
