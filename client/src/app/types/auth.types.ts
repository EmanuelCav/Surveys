import { ChangeEvent } from "react";

import { ILogin, IRegister, IUser } from "../interfaces/User";
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
export type genderType = {
    gender: string;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export type userReducerType = {
    user: IUser;
    token: string;
}

export type UserLoginActionPropsType = {
    userData: ILogin;   
    navigate: NavigateFunction;
    handleIsAuth: () => void;
}

export type UserRegisterActionPropsType = {
    userData: IRegister;
    navigate: NavigateFunction;   
    handleIsAuth: () => void;
}