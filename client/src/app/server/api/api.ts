import axios from 'axios'

import { host } from '../../config/import';

export const api = axios.create({ baseURL: import.meta.env.PROD ? `${host}` : `${host}` })