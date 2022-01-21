import instance from '../configs/Interceptors';

const BLOG_URL = 'http://localhost:8082/sec';
export const getBlog = () => instance.get(BLOG_URL, {timeout: 5000});
