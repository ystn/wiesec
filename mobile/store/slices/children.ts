import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface ChildrenState {
    value: AvatarList | null,
}

const childrenList: AvatarList = {
    // title: 'Children',
    avatars: [
        {
          id: '1',
          full_name: 'Tim Cook',
          image: 'https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg',
        },
        {
          id: '2',
          full_name: 'Thomas Edison',
          image: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg',
        }
    ]
}

const initialState: ChildrenState = {
    value: childrenList,
}

const childrenSlice = createSlice({
    name: 'children',
    initialState,
    reducers: {
        appendChild: (state, action: PayloadAction<Avatar>) => {
            console.log('hello', action)
            state.value?.avatars.push(action.payload);

        },
        deleteChild: (state, action: PayloadAction<string>) => {
            // state.value?.avatars = [...state.value?.avatars.filter((value) => value.id !== action.payload)]
        }
    }
})

export const { appendChild, deleteChild } = childrenSlice.actions;

export function selectChildren(state: RootState) {
    return state.children.value;
}

export default childrenSlice;