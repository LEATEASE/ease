//定义用户相关的数据ts类型
import { ResponseData } from "../home/type";

export interface UserCodeResponseData extends ResponseData {
    data: string
}
//用户登录参数ts类型
export interface LoginData {
    "phone": string,
    "code": string
}

//用户登录数据ts类型
export interface UserInfo {
    "name": string,
    "token": string
}

//用户登录接口返回数据ts类型
export interface UserLoginResponseData extends ResponseData {
    data: UserInfo
}
//定义微信扫码登录的参数数据ts类型
export interface WXLogin {
    "redirectUri": string,
    "appid": string,
    "scope": string,
    "state": string
}
//微信扫码登录返回数据类型
export interface WXLoginResponseData extends ResponseData {
    data: WXLogin
}