import axios from 'axios';
import { CONFIG } from '../constants/config';


const api = axios.create({ baseURL: CONFIG.API_BASE_URL });

export const createPaymentIntent = (amount) => api.post('/payments/intent', { amount });