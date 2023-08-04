// 引入路由器
import router from '@/router/index'
//@ts-ignore
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//引入大仓库
import pinia from '@/store'
//引入小仓库
import useUserStore from "@/store/modules/user"
//进行路由鉴权
Nprogress.configure({ showSpinner: false });
//获取user仓库中的数据
let userStore = useUserStore(pinia)
//用户未登录能去的路由
const routeList = ['/home', '/hospital/registration', '/hospital/detail', '/hospital/notice', '/hospital/discontinuation', '/hospital/search', '/hospital']
//前置守卫，进入路由前
router.beforeEach((to, from, next) => {
    Nprogress.start()
    let token = userStore.userLoginInfo.token
    if (token) {
        next()
    } else {
        if (routeList.includes(to.path)) {
            next()
        } else {
            userStore.visiable = true
            // next('')
            next({ path: '/home', query: { rediect1: to.fullPath, rediect2: from.fullPath } })
        }
    }
})
//后置路由守卫
router.afterEach((to, from) => {
    //动态设置网页的标题
    document.title = `樂安医-${to.meta.title}`
    Nprogress.done()
})