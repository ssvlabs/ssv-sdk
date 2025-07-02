import { createClusterManager } from '@/libs/cluster';
import { createOperatorManager } from '@/libs/operator';
import { createUtils } from '@/libs/utils';
import { createConfig, isConfig } from './config/create';
export class SSVSDK {
    constructor(props) {
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "clusters", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "operators", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "api", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contract", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "utils", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.config = isConfig(props) ? props : createConfig(props);
        this.clusters = createClusterManager(this.config);
        this.operators = createOperatorManager(this.config);
        this.api = this.config.api;
        this.contract = this.config.contract;
        this.utils = createUtils(this.config);
    }
}
