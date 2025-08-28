import axios from 'axios';
import { CONFIG } from '../constants/config';


const api = axios.create({ baseURL: CONFIG.API_BASE_URL });


export const listShops = () => api.get('/shops');