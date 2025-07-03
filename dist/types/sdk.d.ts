import { createClusterManager } from '@/libs/cluster';
import { createOperatorManager } from '@/libs/operator';
import { createUtils } from '@/libs/utils';
import type { ConfigReturnType } from './config/create';
import type { ConfigArgs } from './utils/zod/config';
export declare class SSVSDK {
    readonly config: ConfigReturnType;
    readonly clusters: ReturnType<typeof createClusterManager>;
    readonly operators: ReturnType<typeof createOperatorManager>;
    readonly api: ConfigReturnType['api'];
    readonly contract: ConfigReturnType['contract'];
    readonly utils: ReturnType<typeof createUtils>;
    constructor(props: ConfigArgs | ConfigReturnType);
}
