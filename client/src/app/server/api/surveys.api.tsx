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

export const createOptionApi = async (id: number, token: string) => {
    return await api.patch(`/options/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const removeOptionApi = async (id: number, surveyId: number, token: string) => {
    return await api.patch(`/options/${id}/surveys/${surveyId}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const updateOptionApi = async (id: number, optionData: ICreateOption, token: string) => {
    return await api.put(`/options/${id}`, optionData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const getSurveyApi = async (id: number, token: string) => {
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

export const recommendSurveyApi = async (id: number, token: string) => {
    return await api.patch(`/surveys/recommend/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const voteSurveyApi = async (id: number, surveyId: number, token: string) => {
    return await api.patch(`/options/vote/${id}/${surveyId}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const commentSurveyApi = async (id: number, commentData: ICreateComment, token: string) => {
    return await api.patch(`/comments/${id}`, commentData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const removeCommentApi = async (id: number, token: string) => {
    return await api.delete(`/comments/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const likeCommentApi = async (id: number, token: string) => {
    return await api.patch(`/comments/like/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const categoriesApi = async () => {
    return await api.get('/categories')
}