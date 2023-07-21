
import { HospitalDepartmentArr, HospitalDetail } from "@/api/hospital/type";
//定义仓库返回数据的ts类型
export interface DetailState {
    hospitalDetail: HospitalDetail,
    hospitalDepartment: HospitalDepartmentArr
}