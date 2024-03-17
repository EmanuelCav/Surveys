import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICounterUser, ICountry, IUser } from "../../interfaces/User";

import { key_persist } from "../../config/import";

const initialState: ICounterUser = {
    user: {},
    isLoggedIn: false,
    profile: {},
    users: [],
    countries: []
}

const counterSliceUser = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authAction: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoggedIn = true
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
        countriesAction: (state, action: PayloadAction<ICountry[]>) => {
            state.countries = action.payload
        }
    }
})

export const { authAction, logoutAction, getUserAction, usersAction, countriesAction } = counterSliceUser.actions

export default counterSliceUser.reducer