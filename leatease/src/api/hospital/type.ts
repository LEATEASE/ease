/*
 * @Author: LEATEASE 2112087898@qq.com
 * @Date: 2023-07-20 20:45:56
 * @LastEditors: LEATEASE 2112087898@qq.com
 * @LastEditTime: 2023-07-20 20:50:43
 * @FilePath: \leatease\leatease\src\api\hospital\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 定义医院详情页面接口返回数据ts类型
//引入之前已经定义的数据类型
import { ResponseData } from "../home/type";

//代表医院详情的数据
export interface HospitalDetail {
    "bookingRule": {
        "cycle": number,
        "releaseTime": string,
        "stopTime": string,
        "quitDay": number,
        "quitTime": string,
        "rule": string[]
    },
    "hospital": {
        "id": string,
        "createTime": string,
        "updateTime": string,
        "isDeleted": number,
        "param": {
            "hostypeString": string,
            "fullAddress": string
        },
        "hoscode": string,
        "hosname": string,
        "hostype":string,
        "provinceCode": string,
        "cityCode":string,
        "districtCode": string,
        "address": string,
        "logoData": string,
        "intro": null,
        "route": string,
        "status": string,
        "bookingRule": null
    }
}

//医院详情返回数据ts
export interface HospitalDetailResponseData extends ResponseData{
    data:HospitalDetail
}