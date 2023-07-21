/*
 * @Author: LEATEASE 2112087898@qq.com
 * @Date: 2023-07-20 21:18:13
 * @LastEditors: LEATEASE 2112087898@qq.com
 * @LastEditTime: 2023-07-20 22:06:31
 * @FilePath: \leatease\leatease\src\store\hospitalDetail.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//定义小仓库的方法
import { defineStore } from "pinia";
//引入发请求的方法
import { reqHospitalDepartment, reqHospitalDetail } from "@/api/hospital";
import type { HospitalDepartmentResponseData, HospitalDetail, HospitalDetailResponseData } from '@/api/hospital/type'
import type { DetailState } from "./interface";
const useDetailStore = defineStore('Detail', {
    state: (): DetailState => {
        return {
            //医院详情数据
            hospitalDetail: ({} as HospitalDetail),
            //医院科室数据
            hospitalDepartment: []
        }
    },
    actions: {
        //获取医院详情数据的方法
        async getHospitalDetail(hoscode: string) {
            let result: HospitalDetailResponseData = await reqHospitalDetail(hoscode)
            if (result.code === 200) {
                this.hospitalDetail = result.data
            }
        },
        //获取医院科室数据
        async getDepartment(hoscode: string) {
            let result: HospitalDepartmentResponseData = await reqHospitalDepartment(hoscode)
            // console.log(result.data);
            if (result.code === 200) {
                this.hospitalDepartment = result.data
            }
        }
    },
    getters: {

    }
})
export default useDetailStore