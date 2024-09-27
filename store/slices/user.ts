import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { createSession } from "@/api/session";

interface UserState {
    value: User | null;
    session: Session | null;
    isLoading: boolean;
}

const initialState: UserState = {
    value: null,
    session: null,
    isLoading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            // state.user = {name: 'John', surname: 'Doe', birth: new Date(1989, 3, 5), sex: 'male', picture: ''}
            state.value = action.payload
            state.isLoading = true;
            state.session = createSession();
            state.isLoading = false;
        },
        logout: state => {
            state.value = null
        }
    }
})

export const { login, logout } = userSlice.actions;

export function selectUser(state: RootState) {
    return state.user.value;
}

export function selectSession(state: RootState) {
    return state.user;
}

export default userSlice;