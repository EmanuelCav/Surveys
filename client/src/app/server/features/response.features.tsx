import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

import { IResponse } from "../../interfaces/Response";

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
    }
})

export const { loadingAction } = counterSliceRespose.actions

export default counterSliceRespose.reducer