import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.EXPO_PUBLIC_BACKEND}api/v1/` }),
    endpoints: (builder) => ({
      // login: builder.query({
      //   query: () => `token-auth/`,
      //   // query: (name) => `token-auth/${name}`,
      // }),
      login: builder.mutation({
        query: (body) => ({
          url: `token-auth/`,
          method: 'POST',
          body
        }),
        // transformResponse: (response, meta, arg) => response.data,
        // transformErrorResponse: (response, meta, arg) => response.status,
        // async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
        // async onCacheEntryAdded(arg, { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry }) {},
      }),
    }),
})

export const { useLoginMutation } = authApi
