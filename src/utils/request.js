import axios from 'axios';
import {getToken} from '@/utils/auth';

let service = axios.create({
    timeout: 1000,
});

service.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = token;
        }
        return config;
    }
);

export default service;