import { genderType, userReducerType } from "../types/action.types";
import { ISurvey } from "./Survey";

export interface ICounterUser {
    user: userReducerType;
    isLoggedIn: boolean;
    profile: IUser;
    users: IUser[]
    countries: ICountry[];
}

export interface IUser {
    id: number;
    createdAt: string;
    updatedAt: string;
    username: string;
    email: string;
    gender: genderType;
    status: boolean;
    followers: IFollow[];
    following: IFollow[];
    surveys: ISurvey[];
    description: string;
    country: ICountry;
}

export interface IFollow {
    followerId: number;
    followingId: number;
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

export interface IUpdateProfile {
    username: string;
    description: string;
    country: string;
}

export interface ICountry {
    id: number;
    country: string;
    createdAt: string;
    updatedAt: string;
}
