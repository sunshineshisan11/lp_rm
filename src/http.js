import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
	//正式地址
	// baseURL: 'https://lovepartya.com:168',
	//测试地址
    baseURL: 'http://www.lovepartya.com:3333',
    timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        // 例如，添加请求头
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        console.log(error); // 打印错误信息
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        return response.data;
    },
    (error) => {
        // 对响应错误做点什么
        console.log('err' + error); // 打印错误信息
        return Promise.reject(error);
    }
);

// 封装 GET 请求
export function get(url, params = {}) {
    return service.get(url, { params });
}

// 封装 POST 请求
export function post(url, data = {}) {
    return service.post(url, data);
}

// 封装 PUT 请求
export function put(url, data = {}) {
    return service.put(url, data);
}

// 封装 DELETE 请求
export function del(url, params = {}) {
    return service.delete(url, { params });
}
export default {get, post, put, del}
