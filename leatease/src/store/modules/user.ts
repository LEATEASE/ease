//定义用户仓库
import { defineStore } from "pinia";

const useUserStore = defineStore('User', {
    state: () => {
        return {
            visiable: false//用于控制登陆组件dialog显示与隐藏
        }
    },
    actions: {},
    getters: {}
})
export default useUserStore;