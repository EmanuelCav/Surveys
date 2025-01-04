import axios from 'axios'

// import { host_prod } from '../../config/import';

export const api = axios.create({ baseURL: "http://localhost:4000" })