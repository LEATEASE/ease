//定义用户仓库
import { reqGetUserCode, reqUserLogin } from "@/api/user";
import type { LoginData, UserCodeResponseData, UserInfo, UserLoginResponseData } from "@/api/user/type";
import type { UserState } from "./interface";
import { defineStore } from "pinia";

const useUserStore = defineStore('User', {
    state: (): UserState => {
        return {
            visiable: false,//用于控制登陆组件dialog显示与隐藏
            code: '',
            userLoginInfo: ({} as UserInfo)
        }
    },
    actions: {
        async getCode(phone: string) {
            let result: UserCodeResponseData = await reqGetUserCode(phone)
            if (result.code === 200) {
                this.code = result.data
                // return Promise.reject(new Error(result.message))
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        async getUserLogin(params: LoginData) {
            let result: UserLoginResponseData = await reqUserLogin(params)
            if (result.code === 200) {
                this.userLoginInfo = result.data
                //登录成功，返回
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        }
    },
    getters: {}
})
export default useUserStore;