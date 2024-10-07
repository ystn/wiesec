import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getUserAgent } from 'react-native-user-agent';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: `${process.env.EXPO_PUBLIC_BACKEND}api/v1/`,
      // prepareHeaders: (headers, { getState }) => {
      //   headers.set('Origin', process.env.EXPO_PUBLIC_BACKEND || '')
      //   headers.set('Host', process.env.EXPO_PUBLIC_BACKEND_HOST || '')
      //   headers.set('User-Agent', getUserAgent())
      //   headers.set('Accept', '*/*')
      //   headers.set('Accept-Encoding', 'gzip, deflate, br')
      //   headers.set('Connection', 'keep-alive')
      //   return headers
      // }
    }),
    endpoints: (builder) => ({
      // login: builder.query({
      //   query: () => `token-auth/`,
      //   // query: (name) => `token-auth/${name}`,
      // }),
      login: builder.mutation({
        query: (body) => ({
          url: `token-auth/`,
          method: 'POST',
          
          body,
        }),
      }),
      signup: builder.mutation<{}, Omit<User, 'id' | 'picture' | 'has_access'>>({
        query: (body) => ({
          url: 'user/signup/',
          method: 'POST',
          body,
        })
      })
    }),
})

export const { useLoginMutation, useSignupMutation } = authApi
