import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICounterSurvey, ISurvey } from '../../interfaces/Survey';

const initialState: ICounterSurvey = {
    surveys: [],
    survey: {}
}

export const counterSliceSurvey = createSlice({
    name: 'surveys',
    initialState,
    reducers: {
        surveysAction: (state, action: PayloadAction<ISurvey[]>) => {
            state.surveys = action.payload
        }
    }
})

export const { surveysAction } = counterSliceSurvey.actions

export default counterSliceSurvey.reducer

