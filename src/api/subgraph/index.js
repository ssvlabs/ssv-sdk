import { decodeOperatorPublicKey } from '@/utils/operator';
import { GetClusterBalanceDocument, GetClusterDocument, GetClusterSnapshotDocument, GetClustersDocument, GetOperatorDocument, GetOperatorsDocument, GetOwnerNonceByBlockDocument, GetOwnerNonceDocument, GetValidatorDocument, GetValidatorsDocument, } from '../../graphql/graphql';
export const getOwnerNonce = (client, args) => {
    const document = typeof args.block === 'number' ? GetOwnerNonceByBlockDocument : GetOwnerNonceDocument;
    return client
        .request(document, args)
        .then((r) => r.account?.nonce || '0')
        .catch(() => '0');
};
export const getClusterSnapshot = (client, args) => client.request(GetClusterSnapshotDocument, args).then((res) => res.cluster);
export const getCluster = (client, args) => client.request(GetClusterDocument, args).then((res) => res.cluster);
export const getClusters = (client, args) => client.request(GetClustersDocument, args).then((res) => res.clusters);
export const getOperator = (client, args) => client.request(GetOperatorDocument, args).then((res) => {
    if (!res.operator)
        return null;
    return {
        ...res.operator,
        publicKey: decodeOperatorPublicKey(res.operator.publicKey),
        whitelisted: res.operator.whitelisted.map((v) => v.id),
    };
});
export const getOperators = (client, args) => client.request(GetOperatorsDocument, args).then((res) => res.operators.map((o) => ({
    ...o,
    publicKey: decodeOperatorPublicKey(o.publicKey),
    whitelisted: o.whitelisted.map((v) => v.id),
})));
export const getValidators = (client, args) => client.request(GetValidatorsDocument, args).then((res) => res.validators);
export const getValidator = (client, args) => client.request(GetValidatorDocument, args).then((res) => res.validator);
export const getClusterBalance = (client, args) => client.request(GetClusterBalanceDocument, args);
export const getQueries = (client) => ({
    getOwnerNonce: getOwnerNonce.bind(null, client),
    getClusterSnapshot: getClusterSnapshot.bind(null, client),
    getCluster: getCluster.bind(null, client),
    getClusters: getClusters.bind(null, client),
    getOperator: getOperator.bind(null, client),
    getOperators: getOperators.bind(null, client),
    getValidators: getValidators.bind(null, client),
    getValidator: getValidator.bind(null, client),
    getClusterBalance: getClusterBalance.bind(null, client),
});
