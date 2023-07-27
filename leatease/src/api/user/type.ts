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
//代表个就诊人的信息
export interface VisitorInfo {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
        "certificatesTypeString": string,
        "contactsCertificatesTypeString": string,
        "cityString": null,
        "fullAddress": string,
        "districtString": null,
        "provinceString": null
    },
    "userId": number,
    "name": number,
    "certificatesType": string,
    "certificatesNo": string,
    "sex": number,
    "birthdate": string,
    "phone": string,
    "isMarry": number,
    "provinceCode": null,
    "cityCode": null,
    "districtCode": null,
    "address": string,
    "contactsName": string,
    "contactsCertificatesType": string,
    "contactsCertificatesNo": string,
    "contactsPhone": string,
    "isInsure": number,
    "cardNo": null,
    "status": string
}
//代表就诊人信息列表类型
export type VisitorList = VisitorInfo[]
//就诊人信息返回接口数据ts类型
export interface VisitorResonpData extends ResponseData {
    data: VisitorList
}