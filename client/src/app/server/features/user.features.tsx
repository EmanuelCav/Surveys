import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICounterUser, IUser } from "../../interfaces/User";

import { key_persist } from "../../config/import";

const initialState: ICounterUser = {
    user: {},
    isLoggedIn: false,
    profile: {},
    users: []
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
            localStorage.removeItem(`${key_persist}`)
        },
        getUserAction: (state, action: PayloadAction<IUser>) => {
            state.profile = action.payload
        },
        usersAction: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        },
        followAction: (state, action: PayloadAction<IUser>) => {
            state.profile = action.payload
        }
    }
})

export const { loginAction, registerAction, logoutAction, getUserAction, usersAction, followAction } = counterSliceUser.actions

export default counterSliceUser.reducer