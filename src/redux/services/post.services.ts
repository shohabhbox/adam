import axiosInstance from './axiosInstance'; // Adjust path
import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestParams {
    [key: string]: any;
}

export const put = async <T = any>(uri: string, body: RequestParams): Promise<T> => {
    try {
        const config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };
        console.log(uri, body);

        const response: AxiosResponse<T> = await axiosInstance.put(uri, body, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const post = async <T = any>(uri: string, body: RequestParams): Promise<T> => {
    try {
        console.log(uri, body);

        const response: AxiosResponse<T> = await axiosInstance.post(uri, body);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const formDataPost = async <T = any>(uri: string, body: FormData): Promise<T> => {
    const config: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    try {
        const response: AxiosResponse<T> = await axiosInstance.post(uri, body, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};