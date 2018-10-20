import Vue from 'vue'

import axios from 'axios';




// 请求拦截器
axios.interceptors.request.use(config => {
// loading
    this.$indicator.open('加载中...');//这个是加载中。。。。
    return config
}, error => {
    return Promise.reject(error)
});

// 相应拦截器
axios.interceptors.response.use(data => {

    // loading
    this.$indicator.close('');//关闭loading效果。。。。
    return data
}, error => {
    return Promise.resolve(error.response)
});

export default axios