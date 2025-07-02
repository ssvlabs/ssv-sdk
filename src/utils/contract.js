export const waitForTransaction = async (config, fn) => {
    const hash = await fn;
    return config.publicClient.waitForTransactionReceipt({ hash });
};
