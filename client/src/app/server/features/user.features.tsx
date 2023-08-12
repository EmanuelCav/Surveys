import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICounterUser, IUser } from "../../interfaces/User";

const initialState: ICounterUser = {
    user: {},
    isLoggedIn: false
}

const counterSliceUser = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginAction: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload,
            state.isLoggedIn = true
        },
        registerAction: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoggedIn = false
        }
    }
})

export const { loginAction, registerAction } = counterSliceUser.actions

export default counterSliceUser.reducer