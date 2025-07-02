import join from '@/utils/url-join';
export const checkOperatorDKGEnabled = (baseApi, dkgAddresses) => {
    return fetch(join(baseApi, `/operators/dkg_health_check`), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            dkgAddresses,
        }),
    }).then((res) => res.json());
};
export const getSSVAPI = (endpoint) => {
    return {
        checkOperatorDKGEnabled: checkOperatorDKGEnabled.bind(null, endpoint),
    };
};
