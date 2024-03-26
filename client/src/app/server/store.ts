import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { key_name_persist } from "../config/import";

import surveyReducer from './features/surveys.features';
import userReducer from './features/user.features';
import responseReducer from './features/response.features';

const reducers = combineReducers({
    surveys: surveyReducer,
    user: userReducer,
    response: responseReducer
})

const persistedReducer = persistReducer({
    key: `${key_name_persist}`,
    version: 1,
    storage
}, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})