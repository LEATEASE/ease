//定义用户相关的接口
import request from '@/util/request'
import type { LoginData, OrderInfoResonpData, SubmitOrderResonpData, UserCodeResponseData, UserLoginResponseData, VisitorResonpData, WXLoginResponseData } from './type'
enum API {
    GETUSERCODE_URL = '/sms/send/',
    USERLOGIN_URL = '/user/login',
    WXLOGIN_URL = '/user/weixin/getLoginParam/',
    // 获取所有就诊人信息的接口
    VISITORLIST_URL = '/user/patient/auth/findAll',
    //创建订单接口
    SUBMITORDER_URL = '/order/orderInfo/auth/submitOrder/',
    GETORDERINFO_URL = '/order/orderInfo/auth/getOrderInfo/'
}
export const reqGetUserCode = (phone: string) => request.get<any, UserCodeResponseData>(API.GETUSERCODE_URL + phone)
//用户登录
export const reqUserLogin = (data: LoginData) => request.post<any, UserLoginResponseData>(API.USERLOGIN_URL, data)
//微信登录
export const reqWXLogin = (wxRedirectUri: string) => request.get<any, WXLoginResponseData>(API.WXLOGIN_URL + `?wxRedirectUri=${wxRedirectUri}`)
//所有就诊人信息
export const reqVisitorList = () => request.get<any, VisitorResonpData>(API.VISITORLIST_URL)
//获取订单编号
export const reqSubmitOrder = (hoscode: string, scheduleId: string, patientId: number) => request.post<any, SubmitOrderResonpData>(API.SUBMITORDER_URL + `${hoscode}/${scheduleId}/${patientId}`)
//获取订单详情
export const reqGetOrderInfo = (id: string) => request.get<any, OrderInfoResonpData>(API.GETORDERINFO_URL + id)