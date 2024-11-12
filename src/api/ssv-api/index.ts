import join from '@/utils/url-join';
export const checkOperatorDKGEnabled = (
  baseApi: string,
  dkgAddresses: { id: string; address: string }[],
) => {
  return fetch(join(baseApi, `/operators/dkg_health_check`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dkgAddresses,
    }),
  }).then(
    (res) =>
      res.json() as Promise<
        {
          id: string
          isHealthy: boolean
        }[]
      >,
  )
}

export const getSSVAPI = (endpoint: string) => {
  return {
    checkOperatorDKGEnabled: checkOperatorDKGEnabled.bind(null, endpoint),
  }
}
