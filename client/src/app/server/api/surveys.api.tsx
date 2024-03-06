import axios from 'axios';

import { ICreateComment, ICreateOption, ICreateSurvey } from '../../interfaces/Survey';

import { host } from '../../config/import';

const api = axios.create({ baseURL: `${host}` })

export const surveysApi = async () => {
    return await api.get('/surveys')
}

export const surveysFollowApi = async (token: string) => {
    return await api.get('/surveys/follow', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const createSurveyApi = async (surveyData: ICreateSurvey, token: string) => {
    return await api.post('/surveys', surveyData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const createOptionApi = async (optionData: ICreateOption, id: number, token: string) => {
    return await api.patch(`/options/${id}`, optionData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const getSurveyApi = async (id: string, token: string) => {
    return await api.get(`/surveys/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const removeSurveyApi = async (id: number, token: string) => {
    return await api.delete(`/surveys/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const recommendSurveyApi = async (id: string, token: string) => {
    return await api.patch(`/surveys/recommend/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const voteSurveyApi = async (id: string, surveyId: string, token: string) => {
    return await api.patch(`/options/vote/${id}/${surveyId}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const commentSurveyApi = async (id: string, commentData: ICreateComment, token: string) => {
    return await api.patch(`/comments/${id}`, commentData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const removeCommentApi = async (id: string, token: string) => {
    return await api.delete(`/comments/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const likeCommentApi = async (id: string, token: string) => {
    return await api.patch(`/comments/like/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const categoriesApi = async () => {
    return await api.get('/categories')
}