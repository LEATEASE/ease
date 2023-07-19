//首页模块接口
import request from "@/util/request";
import type { HospitalLevelAndRegionResponseData, HospitalResponseData } from "./type";
//通过枚举管理接口地址
enum API {
    //获取医院信息接口
    HOSPITAL_URL = '/hosp/hospital/',
    //获取医院等级和地区接口
    HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/'
}

export const reqHospital = (page: number, limit: number) => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}`)
export const reqHospitalLevelAndRegion = (dictCode: string) => request<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL + dictCode)