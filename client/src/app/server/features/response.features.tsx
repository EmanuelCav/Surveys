import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

import { IResponse } from "../../interfaces/Response";

import * as userAction from "../actions/user.actions";
import * as surveyAction from "../actions/survey.actions";

const initialState: IResponse = {
    loading: false
}

const counterSliceResponse = createSlice({
    name: 'response',
    initialState,
    reducers: {
        loadingAction: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(userAction.userLogin.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.userLogin.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userAction.userRegister.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.userRegister.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userAction.userAll.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.userAll.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userAction.userProfile.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.userProfile.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userAction.userLogout.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.userLogout.fulfilled, (state) => {
            state.loading = false
        })

        builder.addCase(surveyAction.surveyAll.pending, (state) => {
            state.loading = true
        })
        builder.addCase(surveyAction.surveyAll.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(surveyAction.surveyCreate.pending, (state) => {
            state.loading = true
        })
        builder.addCase(surveyAction.surveyCreate.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(surveyAction.surveyGet.pending, (state) => {
            state.loading = true
        })
        builder.addCase(surveyAction.surveyGet.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(surveyAction.surveyRemove.pending, (state) => {
            state.loading = true
        })
        builder.addCase(surveyAction.surveyRemove.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(surveyAction.surveyOptions.pending, (state) => {
            state.loading = true
        })
        builder.addCase(surveyAction.surveyOptions.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(surveyAction.categoriesAll.pending, (state) => {
            state.loading = true
        })
        builder.addCase(surveyAction.categoriesAll.fulfilled, (state) => {
            state.loading = false
        })
    },
})

export const { loadingAction } = counterSliceResponse.actions

export default counterSliceResponse.reducer