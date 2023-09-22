import { IComment, IOption, ISurvey } from "../interfaces/Survey";
import { userReducerType } from "./auth.types";

export type surveyType = {
    surveys: ISurvey[];
    survey: ISurvey;
    follow: ISurvey[];
}

export type getSurveyType = {
    survey: ISurvey;
    user: userReducerType;
}

export type removeSurveyType = {
    survey: ISurvey;
    user: userReducerType;
    setIsRemove: (isRemove: boolean) => void;
}

export type optionSurveyType = {
    user: userReducerType;
    survey: ISurvey;
    option: IOption;
    isVoted: boolean;
    setIsVoted: (isVoted: boolean) => void;
    totalVotes: number;
}

export type commentSurveyType = {
    comment: IComment;
    user: userReducerType;
}