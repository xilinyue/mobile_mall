import axios from 'axios';

// 创建axios实例
const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://localhost:3000',
    timeout: 5000
});

// axios拦截器
// 请求拦截的作用
instance.interceptors.request.use(config => {
   // console.log(config);
   return config;
},error => {
    console.log(error);
});

// 响应拦截
instance.interceptors.response.use(res => {
    return res.data;
},error => {
    console.log(error);
});

export default instance;