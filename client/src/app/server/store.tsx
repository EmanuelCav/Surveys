import { configureStore } from "@reduxjs/toolkit";

import surveyReducer from './features/surveys.features';
import userReducer from './features/user.features';

export const store = configureStore({
    reducer: {
        surveys: surveyReducer,
        user: userReducer
    }
})