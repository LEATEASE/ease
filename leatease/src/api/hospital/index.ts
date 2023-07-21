//引入二次封装的axios
import request from "@/util/request";
import type { HospitalDetailResponseData, HospitalDepartmentResponseData } from './type'
//枚举管理接口地址
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    //获取某一个医院科室的数据
    HOSPITALDEPARTMENT_URL = '/hosp/hospital/department/'
}
//获取预约挂号详情
export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetailResponseData>(API.HOSPITALDETAIL_URL + hoscode)
//获取医院科室数据
export const reqHospitalDepartment = (hoscode: string) => request.get<any, HospitalDepartmentResponseData>(API.HOSPITALDEPARTMENT_URL + hoscode)