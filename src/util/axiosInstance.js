import axios from 'axios';
import {Modal} from 'antd';

function handleAjaxOptions() {
    return {
        baseURL: 'http://localhost:8999/',
        timeout: 10000, // 请求时间超过10秒视为超时
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        withCredentials: true
    };
}

const axiosInstance = axios.create(handleAjaxOptions());

export {axiosInstance};
