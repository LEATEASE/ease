//引入二次封装的axios
import request from "@/util/request";
import type { HospitalDetailResponseData } from './type'
//枚举管理接口地址
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/'
}
//获取预约挂号详情

export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetailResponseData>(API.HOSPITALDETAIL_URL + hoscode)