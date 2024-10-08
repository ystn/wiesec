import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slices/user"
import { setupListeners } from "@reduxjs/toolkit/query"
import chatbotSlice from "./slices/chatbot"
import { messageApi } from "./api/message"
import { authApi } from "./api/auth"
import locationSlice from "./slices/location"
import childrenSlice from "./slices/children"

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        chatbot: chatbotSlice.reducer,
        location: locationSlice.reducer,
        children: childrenSlice.reducer,
        [messageApi.reducerPath]: messageApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(messageApi.middleware).concat(authApi.middleware),
})

setupListeners(store.dispatch)

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
