import { ISurvey } from "./Survey";

export interface IUser {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    email: string;
    gender: string;
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

export interface ICountry {
    id: number;
    country: string;
    createdAt: Date;
    updatedAt: Date;
}