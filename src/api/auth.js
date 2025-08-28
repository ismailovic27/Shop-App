import axios from 'axios';
import { CONFIG } from '../constants/config';


const api = axios.create({ baseURL: CONFIG.API_BASE_URL });


export const loginApi = (email, password) => api.post('/auth/login', { email, password });
export const signupApi = (payload) => api.post('/auth/signup', payload);
export const meApi = () => api.get('/auth/me');