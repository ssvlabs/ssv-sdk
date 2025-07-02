export const exitValidators = async (config, { args: { publicKeys, operatorIds }, ...writeOptions }) => {
    if (publicKeys.length === 1) {
        return config.contract.ssv.write.exitValidator({
            args: {
                publicKey: publicKeys[0],
                operatorIds: [operatorIds[0]],
            },
            ...writeOptions,
        });
    }
    return config.contract.ssv.write.bulkExitValidator({
        args: {
            publicKeys,
            operatorIds,
        },
        ...writeOptions,
    });
};
