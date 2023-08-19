import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICounterUser, IUser } from "../../interfaces/User";

const initialState: ICounterUser = {
    user: {},
    isLoggedIn: false,
    profile: {}
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
        },
        logoutAction: (state) => {
            state.user = {}
            state.isLoggedIn = false
            state.profile = {}
        },
        getUserAction: (state, action: PayloadAction<IUser>) => {
            state.profile = action.payload
        }
    }
})

export const { loginAction, registerAction, logoutAction, getUserAction } = counterSliceUser.actions

export default counterSliceUser.reducer