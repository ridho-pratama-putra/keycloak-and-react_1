import axios from 'axios';
import keycloak from './Keycloak';

const instance = axios.create();

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
