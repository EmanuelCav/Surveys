import { IUser } from "./User";

export interface ICounterSurvey {
    surveys: ISurvey[];
    survey: object;
    categories: ICategory[]
}

export interface ISurvey {
    id: number;
    title: string;
    options: IOption[];
    recommendations: number[]
    comments: IComment[];
    category: ICategory;
    user: IUser;
    createdAt: string;
    updatedAt: string;
}

export interface ICategory {
    id: number;
    category: string;
    iconCategory: string;
    isSelect: boolean;
    surveys: ISurvey[];
    createdAt: string;
    updatedAt: string;
}

export interface IOption {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    votes: number[];
}

export interface ICreateSurvey {
    title: string;
    category: string;
}

export interface ICreateOption {
    name: string;
}

export interface IComment {
    id: number;
    createdAt: string;
    updatedAt: string;
    comment: string;
    likes: number[];
    user: IUser
}

export interface ICreateComment {
    comment: string;
}
