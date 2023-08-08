import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:4000' })

export const surveysApi = async () => {
    return await api.get('/surveys')
}