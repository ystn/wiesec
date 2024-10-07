import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `http://${process.env.EXPO_PUBLIC_BACKEND}/api/v2/` }),
    endpoints: (builder) => ({
        getAuth: builder.query({
          query: (name) => `pokemon/${name}`,
        }),
      }),
})


  export const { useGetAuthQuery } = authApi
