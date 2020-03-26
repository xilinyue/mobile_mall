import axios from 'axios';

//baseURL = 'http://123.207.32.32:8000/api/hy'
//baseURL = 'http://106.54.54.237:8000/api/hy'

let request = axios.create({
    timeout: 7000, // 请求超时时间
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

export default request;