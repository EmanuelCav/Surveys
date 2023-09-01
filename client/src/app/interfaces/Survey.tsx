import { IUser } from "./User";

export interface ICounterSurvey {
    surveys: ISurvey[];
    survey: object;
    follow: ISurvey[];
}

export interface ISurvey {
    _id: string;
    title: string;
    options: IOption[];
    recommendations: string[]
    comments: any[];
    user: IUser;
    createdAt: string;
    updatedAt: string;
}

export interface IOption {
    _id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    votes: string[];
}

export interface ICreateSurvey {
    title: string;
}

export interface ICreateOption {
    name: string;
}
