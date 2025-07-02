export declare const checkOperatorDKGEnabled: (baseApi: string, dkgAddresses: {
    id: string;
    address: string;
}[]) => Promise<{
    id: string;
    isHealthy: boolean;
}[]>;
export declare const getSSVAPI: (endpoint: string) => {
    checkOperatorDKGEnabled: (dkgAddresses: {
        id: string;
        address: string;
    }[]) => Promise<{
        id: string;
        isHealthy: boolean;
    }[]>;
};
