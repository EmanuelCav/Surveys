import { NavigateFunction } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

import * as userApi from '../api/user.api';
import * as userFeatures from '../features/user.features';

import { UserRegisterActionPropsType, UserLoginActionPropsType, UserAllActionPropsType, UserProfileActionPropsType, UpdateProfileActionPropsType, UpdateStatusActionPropsType, UpdatePasswordActionPropsType } from "../../types/action.types";

import { dangerMessage, successMessage } from "../../helper/message";

export const userLogin = createAsyncThunk('user/login', async (userLoginData: UserLoginActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.loginApi(userLoginData.userData)

        if(data.message) {
            dispatch(userFeatures.userAction(data.user))
        } else {
            dispatch(userFeatures.authAction(data))
        }
        
        userLoginData.handleIsAuth()
        
        userLoginData.navigate('/explore/surveys')

        if(data.message) {
            successMessage(data.message)
        }

    } catch (error: any) {
        if(error.response.data[0]) {
            dangerMessage(error.response.data[0].message)
        } else {
            dangerMessage(error.response.data.message)
        }
    }


})

export const userRegister = createAsyncThunk('user/register', async (userRegisterData: UserRegisterActionPropsType, { dispatch }) => {

    try {

        const registerData = await userApi.registerApi(userRegisterData.userData)
        const addCategoriesData = await userApi.addCategoriesApi(registerData.data.id)

        dispatch(userFeatures.userAction(addCategoriesData.data))

        userRegisterData.handleIsAuth()

        successMessage(registerData.data.message)

    } catch (error: any) {
        if(error.response.data[0]) {
            dangerMessage(error.response.data[0].message)
        } else {
            dangerMessage(error.response.data.message)
        }
    }


})

export const userAll = createAsyncThunk('user/all', async (userData: UserAllActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.usersApi(userData.page, userData.order, userData.token)

        dispatch(userFeatures.usersAction(data.users))

    } catch (error) {
        console.log(error);
    }

})

export const userProfile = createAsyncThunk('user/profile', async (userData: UserProfileActionPropsType, { dispatch }) => {

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

        navigate('/')

    } catch (error) {
        console.log(error);
    }

})

export const updateProfile = createAsyncThunk('user/update', async (userData: UpdateProfileActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.updateProfileApi(userData.profileData, userData.token)

        userData.setIsEditProfile(false)

        dispatch(userFeatures.getUserAction(data.user))

    } catch (error) {
        console.log(error);
    }

})

export const updateStatus = createAsyncThunk('user/status', async (userData: UpdateStatusActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.changeStatusApi(userData.id)

        dispatch(userFeatures.authAction(data.user))

        userData.setIsStatus(true)

        successMessage(data.message)

    } catch (error) {
        console.log(error);
    }

})

export const updatePassword = createAsyncThunk('user/status', async (userData: UpdatePasswordActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.updatePasswordApi(userData.passwordData, userData.email)

        successMessage(data.message)

        dispatch(userFeatures.logoutAction())

        userData.navigate('/')

    } catch (error) {
        console.log(error);
    }

})