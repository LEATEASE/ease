
import { HospitalBookingSchedule, HospitalDepartmentArr, HospitalDetail } from "@/api/hospital/type";
import type { UserInfo } from "@/api/user/type";
//定义仓库返回数据的ts类型
export interface DetailState {
    hospitalDetail: HospitalDetail,
    hospitalDepartment: HospitalDepartmentArr,
    hospitalBookingSchedule: HospitalBookingSchedule,
    // doctorWorkDate: DoctorArr
}

export interface UserState {
    visiable: boolean,
    code: string,
    userLoginInfo: UserInfo
}