import { NavigateFunction } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

import * as userApi from '../api/user.api';
import * as userFeatures from '../features/user.features';

import { userLoginType, userProfileType, userRegisterType } from "../../types/auth.types";

import { dangerMessage } from "../../helper/message";

export const userLogin = createAsyncThunk('user/login', async (userLoginData: userLoginType, { dispatch }) => {

    try {

        const { data } = await userApi.loginApi(userLoginData.userData)

        dispatch(userFeatures.loginAction(data))

        userLoginData.navigate('/surveys')

    } catch (error: any) {
        dangerMessage(error.response.data.message)
    }


})

export const userRegister = createAsyncThunk('user/register', async (userRegisterData: userRegisterType, { dispatch }) => {

    try {

        const { data } = await userApi.loginApi(userRegisterData.userData)

        dispatch(userFeatures.registerAction(data))

        userRegisterData.setIsLogin(true)

    } catch (error: any) {
        dangerMessage(error.response.data.message)
    }


})

export const userAll = createAsyncThunk('user/all', async (token: string, { dispatch }) => {

    try {

        const { data } = await userApi.usersApi(token)

        dispatch(userFeatures.usersAction(data))

    } catch (error) {
        console.log(error);
    }

})

export const userProfile = createAsyncThunk('user/profile', async (userData: userProfileType, { dispatch }) => {

    try {

        const { data } = await userApi.getUserApi(userData.id, userData.token)

        dispatch(userFeatures.getUserAction(data))

    } catch (error) {
        console.log(error);
    }

})

export const userLogout = createAsyncThunk('user/logout', async (navigate: NavigateFunction, { dispatch }) => {

    try {

        dispatch(userFeatures.logoutAction())

        navigate('/auth')

    } catch (error) {
        console.log(error);
    }

})