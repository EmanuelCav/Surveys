export interface ICounterSurvey {
    surveys: object[];
    survey: object;
}

export interface ISurvey {
    _id: string;
    title: string;
    options: any[];
    recommendations: string[]
    comments: any[];
    user: string;
    createdAt: string;
    updatedAt: string;
}