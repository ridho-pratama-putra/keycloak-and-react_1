import instance from '../configs/Interceptors';

const PRODUCTS_URL = 'http://localhost:8082/products';
export const createProduct = product => instance.post(PRODUCTS_URL, product, {timeout: 5000});
export const getProducts = () => instance.get(PRODUCTS_URL, {timeout: 5000});
export const getProductsByBarcode = barcode => instance.get(`${PRODUCTS_URL}/details?barcode=${barcode}`, {timeout: 5000});
