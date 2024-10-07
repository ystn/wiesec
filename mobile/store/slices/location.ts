import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { LocationObject } from "expo-location";

interface LocationState {
    location: LocationObject | null,
    errorMessage: string | null,
}

const initialState: LocationState = {
    location: null,
    errorMessage: null,
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<LocationObject>) => {
            state.location = action.payload;

        },
        setErrorMessage: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload;
        }
    }
})

export const { setLocation, setErrorMessage } = locationSlice.actions;

export function selectLocation(state: RootState) {
    return state.location;
}

export default locationSlice;