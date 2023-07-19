//首页模块接口
import request from "@/util/request";
import type { HospitalLevelAndRegionResponseData, HospitalResponseData, HospitalKeywordsResponseData } from "./type";
//通过枚举管理接口地址
enum API {
    //获取医院信息接口
    HOSPITAL_URL = '/hosp/hospital/',
    //获取医院等级和地区接口
    HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/',
    //通过关键字搜索医院信息
    HOSPITALKEYWORDS_URL = "/hosp/hospital/findByHosname/"
}
export const reqHospital = (page: number, limit: number, hostype: string = '', districtCode: string = '') => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL + dictCode)
export const reqHospitalInfo = (hosname: string) => request.get<any, HospitalKeywordsResponseData>(API.HOSPITALKEYWORDS_URL + hosname)