import axiosInstance from './axiosInstance'; // Adjust path as needed
import { AxiosResponse } from 'axios';

interface RequestBody {
    [key: string]: any;
}

export const patch = async <T = any>(url: string, body: RequestBody): Promise<T> => {
    try {
        console.log("patch url", url);
        console.log("patch body", body);
        
        const response: AxiosResponse<T> = await axiosInstance.patch(url, body);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const update = async <T = any>(url: string, body: RequestBody): Promise<T> => {
    try {
        console.log('====>', url);

        const response: AxiosResponse<T> = await axiosInstance.put(url, body);
        return response.data;
    } catch (error) {
        throw error;
    }
};