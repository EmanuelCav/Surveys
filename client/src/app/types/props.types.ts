import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import { Dispatch } from "@reduxjs/toolkit";
import { Location, NavigateFunction } from "react-router-dom";

import { userReducerType, userType } from "./action.types";
import { ICategory, IComment, ICreateOption, IOption, ISurvey } from "../interfaces/Survey";
import { ICountry, IUser } from "../interfaces/User";
import { GenderTypeKey, PageTypeKey, StateTypeKey } from "./key.types";

export type IconPropsType = {
    navigate: NavigateFunction;
    location: Location;
}

export type AuthPropsType = {
    user: userType;
    setIsLogin: (isLogin: boolean) => void;
    navigate: NavigateFunction;
}

export type ContainerAuthPropsType = {
    navigate: NavigateFunction;
    setIsLogin: (isLogin: boolean) => void;
    setIsRegister: (isRegister: boolean) => void;
    isLogin: boolean;
    isRegister: boolean;
}

export type LoginPropsType = {
    handleIsAuth: () => void;
    navigate: NavigateFunction;
    dispatch: Dispatch;
    registerVisibility: () => void;
}

export type RegisterPropsType = {
    handleIsAuth: () => void;
    navigate: NavigateFunction;
    dispatch: Dispatch;
}

export type FormLAuthPropsType = {
    handleIsAuth: () => void;
    navigate: NavigateFunction;
    dispatch: Dispatch;
}

export type ButtonNavPropsType = {
    func: () => void;
    ComponentIcon: any;
    text: string;
}

export type NavIsAuthPropsType = {
    id: number;
    navigate: NavigateFunction
}

export type FollowPropsType = {
    text: string;
    number: number;
    ml: number;
}

export type SurveyPropsType = {
    survey: ISurvey;
    redirectSurvey: (id: number) => void;
    user: userReducerType;
}

export type NoSuveysPropsType = {
    redirectCreate: () => void;
    isUser: boolean;
}

export type InfoProfilePropsType = {
    user: IUser;
    loggedUser: userReducerType;
    dispatch: Dispatch;
    navigate: NavigateFunction;
    handleEditProfile: () => void;
}

export type SurveysProfilePropsType = {
    user: userType;
    navigate: NavigateFunction;
}

export type CreateSurveyPropsType = {
    setIsOptions: (isOption: boolean) => void;
    user: userReducerType;
    dispatch: Dispatch;
    categories: ICategory[];
}

export type SelectCategoryInputPropsType = {
    text: string;
    value: string;
    handleChange: (e: SelectChangeEvent<string>) => void;
    array: ICategory[];
}

export type SelectGenderInputPropsType = {
    text: string;
    value: string;
    handleChange: (e: SelectChangeEvent<string>) => void;
    array: GenderTypeKey[];
}

export type SelectStateInputPropsType = {
    text: string;
    value: string;
    handleChange: (e: SelectChangeEvent<string>) => void;
    array: StateTypeKey[];
}

export type CreateOptionPropsType = {
    user: userReducerType;
    survey: ISurvey;
    navigate: NavigateFunction
}

export type InputOptionPropsType = {
    option: IOption;
    index: number;
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
}

export type ActionOptionPropsType = {
    text: string;
    handleOptionAction: (isAdd: boolean) => void;
    disabled: boolean;
}

export type SurveyInfoPropsType = {
    survey: ISurvey;
    user: userReducerType;
    dispatch: Dispatch;
    navigate: NavigateFunction;
}

export type OptionsSurveyPropsType = {
    survey: ISurvey;
    isVoted: boolean;
    setIsVoted: (isVoted: boolean) => void;
    user: userReducerType;
    totalVotes: number;
}

export type ShowOptionPropsType = {
    survey: ISurvey;
    isVoted: boolean;
    setIsVoted: (isVoted: boolean) => void;
    user: userReducerType;
    totalVotes: number;
    option: IOption;
}

export type ActionPrivateSurveyPropsType = {
    setIsAction: (isRemove: boolean) => void;
    func: () => void;
    text: string;
    buttonText: string;
}

export type ActionSurveyPropsType = {
    Icon: any;
    data: string;
    func: () => void;
}

export type InfoSurveyPropsType = {
    survey: ISurvey;
    user: userReducerType;
}

export type ActionRemovePropsType = {
    func: () => void;
    cancelAction: () => void;
    buttonText: string;
}

export type ActionsOptionPropsType = {
    handleOptionAction: (isAdd: boolean) => void;
    options: IOption[];
}

export type ShowOptionsPropsType = {
    options: IOption[];
    optionData: ICreateOption[]; 
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
}

export type CommentsPropsType = {
    survey: ISurvey;
    user: userReducerType;
}

export type CommentPropsType = {
    comment: IComment;
    user: userReducerType;
}

export type SurveyCommentsPropsType = {
    comments: IComment[];
    user: userReducerType;
}

export type ActionCommentPropsType = {
    info: string;
    handleAction: () => void;
    Icon: any;
}

export type ShowSurveysPropsType = {
    surveys: ISurvey[];
    redirectSurvey: (id: number) => void;
    user: userReducerType;
}

export type ActionSurveyProfilePropsType = {
    user: userType;
    redirectCreate: () => void;
}

export type ListPropsType = {
    surveys: ISurvey[];
    navigate: NavigateFunction;
}

export type SectionPropsType = {
    section: string;
    handleAction: () => void;
    isAction: boolean;
}

export type NavigationPropsType = {
    isCategories: boolean;
    isUsers: boolean;
    isSurveys: boolean;
    navigate: NavigateFunction;
}

export type CategoryItemsCreatePropsType = {
    value: string;
    item: ICategory;
}

export type StateItemsCreatePropsType = {
    value: string;
    item: string;
}

export type ExploreUsersPropsType = {
    users: IUser[];
    handlePage: (pageType: PageTypeKey) => void;
    page: number;
    navigate: NavigateFunction;
    usersLength: number;
}

export type ChangeUserPropsType = {
    handlePage: (pageType: PageTypeKey) => void;
    page: number;
    usersLength: number;
}

export type ButtonCardPropsType = {
    func: (id: number) => void;
    id: number;
    text: string;
}

export type ShowUsersPropsType = {
    redirectUser: (id: number) => void;
    users: IUser[];
}

export type UserPropsType = {
    redirectUser: (id: number) => void;
    user: IUser;
}

export type UsernamePropsType = {
    loggedUser: userReducerType;
    user: IUser;
    navigate: NavigateFunction;
    dispatch: Dispatch;
}

export type EditProfilePropsType = {
    handleEditProfile: () => void;
    navigate: NavigateFunction;
    dispatch: Dispatch;
    user: userType;
    setIsEditProfile: (isEditProfile: boolean) => void;
}

export type PanelPropsType = {
    anchorEl: null | HTMLElement;
    open: boolean;
    handleClose: () => void;
    navigate: NavigateFunction;
    dispatch: Dispatch;
}

export type PanelSurveyPropsType = {
    anchorEl: null | HTMLElement;
    open: boolean;
    handleClose: () => void;
    setIsRemove: (isRemove: boolean) => void;
    setIsState: (isState: boolean) => void;
}

export type InfoShowSurveyPropsType = {
    survey: ISurvey;
    user: IUser;
}

export type SelectCountryInputPropsType = {
    text: string; 
    value: string; 
    handleChange: (e: SelectChangeEvent<string>) => void; 
    array: ICountry[];
}

export type TitleSurveyPropsType = {
    user: userReducerType;
    survey: ISurvey;
    setIsRemove: (isRemove: boolean) => void;
    setIsState: (isState: boolean) => void;
}

export type SurveySliderPropsType = {
    surveys: ISurvey[];
    redirectSurvey: (id: number) => void;
    user: userReducerType;
    redirectSurveys: () => void;
}
