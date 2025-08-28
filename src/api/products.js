import axios from 'axios';
import { CONFIG } from '../constants/config';


const api = axios.create({ baseURL: CONFIG.API_BASE_URL });


export const listProducts = (params) => api.get('/products', { params });
export const getProduct = (id) => api.get(`/products/${id}`);
export const createProduct = (payload) => api.post('/products', payload);
export const listVendorProducts = (vendorId) => api.get(`/vendors/${vendorId}/products`);