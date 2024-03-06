import { IUser } from "./User";

export interface ICounterSurvey {
    surveys: ISurvey[];
    survey: object;
    follow: ISurvey[];
    categories: ICategory[]
}

export interface ISurvey {
    id: number;
    title: string;
    options: IOption[];
    recommendations: string[]
    comments: IComment[];
    category: ICategory;
    user: IUser;
    createdAt: string;
    updatedAt: string;
}

export interface ICategory {
    id: number;
    category: string;
    icon: string;
    isSelect: boolean;
    surveys: ISurvey[];
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
    category: string;
}

export interface ICreateOption {
    name: string;
}

export interface IComment {
    _id: string;
    createdAt: string;
    updatedAt: string;
    comment: string;
    likes: string[];
    user: IUser
}

export interface ICreateComment {
    comment: string;
}
