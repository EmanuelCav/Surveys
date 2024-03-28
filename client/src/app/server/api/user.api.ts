import { api } from './api';

import { IEmail, ILogin, IPassword, IRegister, IUpdateProfile } from '../../interfaces/User';
import { OrderUserTypeKey } from '../../types/key.types';


export const loginApi = async (userData: ILogin) => {
    return await api.post('/login', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const registerApi = async (userData: IRegister) => {
    return await api.post('/register', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getUserApi = async (id: number, token: string) => {
    return await api.get(`/users/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const usersApi = async (page: number, order: OrderUserTypeKey, token: string | undefined) => {
    return await api.get(`/users?page=${page}&order=${order}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const followApi = async (id: number, token: string) => {
    return await api.patch(`/users/follow/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const countriesApi = async () => {
    return await api.get('/countries')
}

export const updateProfileApi = async (profileData: IUpdateProfile, token: string) => {
    return await api.put('/users/profile', profileData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export const changeStatusApi = async (id: number) => {
    return await api.put(`/users/${id}/status`, null)
}

export const emailPasswordApi = async (emailData: IEmail) => {
    return await api.post('/users/email', emailData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const updatePasswordApi = async (passwordData: IPassword, email: string | null) => {
    return await api.put(`/users/password/${email}`, passwordData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const addCategoriesApi = async (id: number) => {
    return await api.patch(`/users/${id}/categories`, null)
}

export const selectCategoriesApi = async (id: number, token: string) => {
    return await api.put(`/categories/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}