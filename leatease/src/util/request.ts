//对于axios的二次封装
//二次封装的目的：
// 1.利用axios请求、响应拦截器功能
//2.请求拦截器，一般可以在请求头中携带公共的参数：token
//3.响应拦截器，可以简化服务器返回的数据，处理http网络错误
import axios from 'axios'
import { ElMessage } from 'element-plus'

//利用axios.create方法创建axios实例：可以设置基础路径baseURL、超时的时间的设置timeOut
const request = axios.create({
    baseURL: '/api',
    timeout: 5000,//请求超时
})
//请求拦截器
request.interceptors.request.use((config) => {
    //请求拦截器注入配置（配置对象）
    //配置对象最重要的属性headers属性
    //通过请求头携带公共参数token
    return config
})
//响应拦截器
request.interceptors.response.use((response) => {
    //响应拦截器的成功回调，一般会进行数据简化
    return response.data;
}, (error) => {
    //处理http网络错误
    let status = error.response.status
    switch (status) {
        case 404:
            ElMessage({
                type: 'error',
                message: '请求路径出现错误'
            })
            break;
    }
    return Promise.reject(new Error(error.message))
})

export default request;