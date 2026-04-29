import axiosInstance from './axiosInstance'; // Adjust the path as needed
import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface GetParams {
    [key: string]: any;
}

export const get = async <T = any>(url: string, params?: GetParams): Promise<T> => {
    const config: AxiosRequestConfig = {
        params,
    };

    console.log("url", url);
    console.log("params", params);
    

    try {
        const response: AxiosResponse<T> = await axiosInstance.get(url, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};