import axios from 'axios';
import { toast } from 'react-toastify';
import { toastOptions } from '../utils/toast';

export const API_URL = 'http://localhost:5000/api';
export const SERVER_URL = 'http://localhost:5000/';

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

$api.interceptors.response.use(
    (response) => {
        if (response.data && response.data.message) {
            const notify = () => toast.success(response.data.message, toastOptions);
            notify();
        }
        return response;
    },
    async (error) => {
        if (error.status !== 401) {
            console.log(error);
            const notify = () => toast.error(error.response.data.message, toastOptions);
            notify();
        }
        const originalRequest = error.config;
        if (error.response.status == 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                const { data } = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
                localStorage.setItem('token', data.accessToken);
                return $api.request(originalRequest);
            } catch (error) {
                const notify = () => toast.error('Authorization error', toastOptions);
                notify();
                console.log('Ошибка при обновлении access token при его истечении');
            }
        }
    }
);
export default $api;
