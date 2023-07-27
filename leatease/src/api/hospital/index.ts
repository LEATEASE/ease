//引入二次封装的axios
import request from "@/util/request";
import type { HospitalDetailResponseData, HospitalDepartmentResponseData, HospitalBookingScheduleResponseData, DoctorResponseData, DoctorInfoResponseData } from './type'
//枚举管理接口地址
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    //获取某一个医院科室的数据
    HOSPITALDEPARTMENT_URL = '/hosp/hospital/department/',
    //获取医院可预约排班的数据
    HOSPITALBOOKING_URL = '/hosp/hospital/auth/getBookingScheduleRule/',
    //获取医生排班数据
    DOCTORWORKDATE_URL = '/hosp/hospital/auth/findScheduleList/',
    //获取医生信息
    DOCTORINFO_URL = '/hosp/hospital/getSchedule/'
}
//获取预约挂号详情
export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetailResponseData>(API.HOSPITALDETAIL_URL + hoscode)
//获取医院科室数据
export const reqHospitalDepartment = (hoscode: string) => request.get<any, HospitalDepartmentResponseData>(API.HOSPITALDEPARTMENT_URL + hoscode)
//获取医院预约排班数据
export const reqHospitalBooking = (page: number, limit: number, hoscode: string, depcode: string) => request.get<any, HospitalBookingScheduleResponseData>(API.HOSPITALBOOKING_URL + `${page}/${limit}/${hoscode}/${depcode}`)
//获取医生排班数据
export const reqDoctorWorkDate = (hoscode: string, depcode: string, workDate: string) => request.get<any, DoctorResponseData>(API.DOCTORWORKDATE_URL + `${hoscode}/${depcode}/${workDate}`)
//获取医生信息
export const reqDoctorInfo = (scheduleId: string) => request.get<any, DoctorInfoResponseData>(API.DOCTORINFO_URL + scheduleId)