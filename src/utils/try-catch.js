export const tryCatch = (fn) => {
    try {
        return [fn(), null];
    }
    catch (e) {
        return [null, e];
    }
};
