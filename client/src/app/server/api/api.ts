import axios from 'axios'

import { host_prod, host } from '../../config/import';

export const api = axios.create({ baseURL: import.meta.env.DEV ? `${host}`.trim() : `${host_prod}`.trim() })