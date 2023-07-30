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

//订单编号返回数据类型
export interface SubmitOrderResonpData extends ResponseData {
    data: number
}
//代表订单详情
export interface OrderInfo {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
        "orderStatusString": string
    },
    "userId": number,
    "outTradeNo": string,
    "hoscode": string,
    "hosname": string,
    "depcode": string,
    "depname": string,
    "scheduleId": string,
    "title": string,
    "reserveDate": string,
    "reserveTime": number,
    "patientId": number,
    "patientName": string,
    "patientPhone": string,
    "hosRecordId": string,
    "number": number,
    "fetchTime": string,
    "fetchAddress": string,
    "amount": number,
    "quitTime": string,
    "orderStatus": number
}
//定义订单详情返回接口数据ts类型
export interface OrderInfoResonpData extends ResponseData {
    data: OrderInfo
}
//代表二维码数据
export interface Qrcode {
    "codeUrl": string,
    "orderId": number,
    "totalFee": number,
    "resultCode": string
}
//定义二维码接口返回的数据ts类型
export interface QrcodeResponseData extends ResponseData {
    data: Qrcode
}
//定义支付结果接口返回数据类型
export interface PayResultResponse extends ResponseData {
    data: boolean
}
//代表用户信息数据类型
export interface UserInformation {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {},
    "openid": null,
    "nickName": null,
    "phone": string,
    "name": string,
    "certificatesType": string,
    "certificatesNo": string,
    "certificatesUrl": string,
    "authStatus": number,
    "status": number
}
//定义用户详情数据接口返回数据类型
export interface UserInformatiomResponseData extends ResponseData {
    data: UserInformation
}