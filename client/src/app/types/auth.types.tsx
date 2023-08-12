import { ChangeEvent } from "react";

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
export type userType = {
    user: object;
    token: string;
}
export type genderType = {
    gender: string;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}