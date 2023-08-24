import { ChangeEvent } from "react";

import { IUser } from "../interfaces/User";
import { ISurvey } from "../interfaces/Survey";

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
    loggedUser: IUser;
    surveys: ISurvey[];
}

export type userReducerType = {
    user: IUser;
    token: string;
}