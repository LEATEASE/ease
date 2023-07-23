//定义用户仓库
import { reqGetUserCode, reqUserLogin } from "@/api/user";
import type { LoginData, UserCodeResponseData, UserLoginResponseData } from "@/api/user/type";
import type { UserState } from "./interface";
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/util/user'
import { defineStore } from "pinia";

const useUserStore = defineStore('User', {
    state: (): UserState => {
        return {
            visiable: false,//用于控制登陆组件dialog显示与隐藏
            code: '',
            userLoginInfo: JSON.parse(GET_TOKEN() as string) || {}
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
                //本地存储用户登录信息，持久化
                SET_TOKEN(JSON.stringify(this.userLoginInfo))
                //登录成功，返回
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        logout() {
            //清空仓库用户数据
            this.userLoginInfo = { name: '', token: '' }
            //删除本地存储的数据
            REMOVE_TOKEN()
        }
    },
    getters: {}
})
export default useUserStore;