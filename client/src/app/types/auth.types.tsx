import { ChangeEvent } from "react";

import { ILogin, IUser } from "../interfaces/User";
import { ISurvey } from "../interfaces/Survey";
import { NavigateFunction } from "react-router-dom";

export type userType = {
    user: userReducerType;
    isLoggedIn: boolean;
    profile: IUser;
    users: IUser[];
}
export type isAccountType = {
    typeAuth: string;
    textAccount: string;
    setIsLogin: (isLogin: boolean) => void;
    isLogin: boolean;
}
export type isLoginType = {
    setIsLogin: (isLogin: boolean) => void;
    isLogin: boolean;
}
export type genderType = {
    gender: string;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}
export type profileType = {
    user: IUser;
    loggedUser: userReducerType;
    surveys: ISurvey[];
}

export type userReducerType = {
    user: IUser;
    token: string;
}

export type profileSurveyType = {
    user: userType;
    surveys: ISurvey[];
}

export type userLoginType = {
    navigate: NavigateFunction;
    userData: ILogin;   
}

export type userRegisterType = {
    setIsLogin: (isLogin: boolean) => void;
    userData: ILogin;   
}

export type userProfileType = {
    id: string;
    token: string;
}