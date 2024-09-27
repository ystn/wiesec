import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slices/user"

const store = configureStore({
    reducer: {user: userSlice.reducer}
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;