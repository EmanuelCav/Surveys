import { api } from './api';

import { ICreateComment, ICreateOption, ICreateSurvey, IUpdateState } from '../../interfaces/Survey';
import { DateTypeKey, OrderTypeKey } from '../../types/key.types';

export const surveysApi = async (token: string | undefined, order: OrderTypeKey, date: DateTypeKey) => {
    return await api.get(`/surveys?order=${order}&date=${date}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
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
    return await api.patch(`/surveys/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const voteSurveyApi = async (id: number, surveyId: number, token: string) => {
    return await api.patch(`/options/${id}/votes/${surveyId}`, null, {
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
    return await api.patch(`/comments/${id}/like`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const categoriesApi = async () => {
    return await api.get('/categories')
}

export const updateStateApi = async (stateData: IUpdateState, id: number, token: string) => {
    return await api.put(`/surveys/${id}`, stateData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export const categoriesSurveyApi = async (id: number, token: string) => {
    return await api.get(`/categories/${id}/surveys`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}