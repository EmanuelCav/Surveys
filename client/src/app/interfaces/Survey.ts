import { StateTypeKey } from "../types/key.types";
import { IUser } from "./User";

export interface ICounterSurvey {
    surveys: ISurvey[];
    survey: ISurvey;
    categories: ICategory[];
    surveysFollowing: ISurvey[];
}

export interface ISurvey {
    id?: number;
    title?: string;
    options?: IOption[];
    recommendations?: IRecommendation[];
    comments?: IComment[];
    category?: ICategory;
    user?: IUser;
    state?: StateTypeKey;
    createdAt?: string;
    updatedAt?: string;
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
    votes: IVote[];
}

export interface IVote {
    userId: number;
    optionId: number;
}

export interface ICreateSurvey {
    title: string;
    category: string;
    state: string;
}

export interface ICreateOption {
    name: string;
}

export interface IComment {
    id: number;
    createdAt: string;
    updatedAt: string;
    comment: string;
    likes: ILike[];
    user: IUser
}

export interface ILike {
    userId: number,
    commentId: number;
}

export interface ICreateComment {
    comment: string;
}

export interface IRecommendation {
    userId: number;
    surveyId: number;
}

export interface IUpdateState {
    state: StateTypeKey;
}