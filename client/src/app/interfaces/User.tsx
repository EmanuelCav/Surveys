import { genderType } from "../types/action.types";
import { ISurvey } from "./Survey";

export interface ICounterUser {
    user: object;
    isLoggedIn: boolean;
    profile: object;
    users: IUser[]
}

export interface IUser {
    id: number;
    createdAt: string;
    updatedAt: string;
    username: string;
    email: string;
    gender: genderType;
    status: boolean;
    followers: IUser[];
    following: IUser[];
    surveys: ISurvey[];
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IRegister {
    username: string;
    email: string;
    gender: string;
    password: string;
    confirm: string;
    status: boolean;
}
