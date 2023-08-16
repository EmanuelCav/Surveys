import { ChangeEvent } from "react";
import { IUser } from "../interfaces/User";

export type userType = {
    user: userReducerType;
    isLoggedIn: boolean;
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

type userReducerType = {
    user: IUser;
    token: string;
}