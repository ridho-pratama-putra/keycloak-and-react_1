import axios from 'axios';
import keycloak from './Keycloak';

const instance = axios.create({
    baseURL: "http://localhost:8082",
    headers: {
        "Content-Type": "application/json",
    },method: 'POST'
});

instance.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = `Bearer ${keycloak.token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        console.log('tidak ada response salah :: ', res);
        return res;
    },
    async (err) => {
        if (err.response) {
            if (err.response.data) {
                return Promise.reject(err.response.data);
            }
        }
        return Promise.reject(err);
    }
);

export default instance;
