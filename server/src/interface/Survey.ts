import { IUser } from "./User";

export interface ISurvey {
    id: number;
    title: string;
    options: IOption[];
    recommendations: IRecommendation[];
    comments: IComment[];
    category: ICategory;
    user: IUser;
    state: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICategory {
    id: number;
    category: string;
    iconCategory: string;
    surveys: ISurvey[];
    createdAt: Date;
    updatedAt: Date;
}

export interface IOption {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    votes: IVote[];
}

export interface IVote {
    userId: number;
    optionId: number;
}

export interface IComment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    comment: string;
    likes: ILike[];
    user: IUser;
}

export interface ILike {
    userId: number,
    commentId: number;
}

export interface IRecommendation {
    userId: number;
    surveyId: number;
}