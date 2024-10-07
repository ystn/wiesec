import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const messageApi = createApi({
    reducerPath: 'messageApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.EXPO_PUBLIC_BACKEND}/api/v2/` }),
    endpoints: (builder) => ({
        getAuth: builder.query({
          query: (name) => `pokemon/${name}`,
        }),
      }),
})


  export const { useGetAuthQuery } = messageApi
