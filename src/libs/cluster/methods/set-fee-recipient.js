export const setFeeRecipient = async (config, { args: { recipient }, ...writeOptions }) => {
    return config.contract.ssv.write.setFeeRecipientAddress({
        args: {
            recipientAddress: recipient,
        },
        ...writeOptions,
    });
};
