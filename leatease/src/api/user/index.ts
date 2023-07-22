//定义用户相关的接口
import request from '@/util/request'
import type { LoginData, UserCodeResponseData, UserLoginResponseData } from './type'
enum API {
    GETUSERCODE_URL = '/sms/send/',
    USERLOGIN_URL = '/user/login'
}
export const reqGetUserCode = (phone: string) => request.get<any, UserCodeResponseData>(API.GETUSERCODE_URL + phone)
//用户登录
export const reqUserLogin = (data: LoginData) => request.post<any, UserLoginResponseData>(API.USERLOGIN_URL, data)