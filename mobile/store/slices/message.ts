import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const messageApi = createApi({
    reducerPath: 'messageApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
      getMessages: builder.query({
        query: () => 'chat/message/',

      }),
    }),
  })

  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetMessagesQuery } = messageApi
