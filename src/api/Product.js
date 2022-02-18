import instance from '../configs/Interceptors';

const PRODUCTS_URL = 'http://localhost:8899/api-1/products';
export const createProduct = product => instance.post(PRODUCTS_URL, product, {timeout: 5000});
