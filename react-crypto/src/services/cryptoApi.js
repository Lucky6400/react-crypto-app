// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     headers: {
//       'X-RapidAPI-Key': '0d1bf07600msh1a582ca1c24a3f7p12ada8jsn3df43318ae02',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '0d1bf07600msh1a582ca1c24a3f7p12ada8jsn3df43318ae02',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    // what is this reducer for
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

// ~ useGetCryptosQuery: put 'use' at start and 'query' at end of getCryptos
export const {
    useGetCryptosQuery
} = cryptoApi;