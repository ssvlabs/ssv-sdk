export const getOperatorCapacity = async (config, operatorId) => {
    const [operator, limit] = await Promise.all([
        config.api.getOperator({
            id: operatorId,
        }),
        config.contract.ssv.read.getValidatorsPerOperatorLimit(),
    ]);
    if (!operator)
        return 0;
    return limit - Number(operator.validatorCount);
};
