import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

import { IResponse } from "../../interfaces/Response";

import { userAll, userLogin, userLogout, userProfile, userRegister } from "../actions/user.actions";
import { surveyAll, surveyCreate, surveyGet, surveyRemove } from "../actions/survey.actions";

const initialState: IResponse = {
    loading: false
}

const counterSliceRespose = createSlice({
    name: 'response',
    initialState,
    reducers: {
        loadingAction: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userLogin.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userRegister.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userRegister.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userAll.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAll.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userProfile.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userProfile.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userLogout.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userLogout.fulfilled, (state) => {
            state.loading = false
        })

        builder.addCase(surveyAll.pending, (state) => {
            state.loading = true
        })
        builder.addCase(surveyAll.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(surveyCreate.pending, (state) => {
            state.loading = true
        })
        builder.addCase(surveyCreate.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(surveyGet.pending, (state) => {
            state.loading = true
        })
        builder.addCase(surveyGet.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(surveyRemove.pending, (state) => {
            state.loading = true
        })
        builder.addCase(surveyRemove.fulfilled, (state) => {
            state.loading = false
        })
    },
})

export const { loadingAction } = counterSliceRespose.actions

export default counterSliceRespose.reducer