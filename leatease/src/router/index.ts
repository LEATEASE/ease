//新版本和以前写法有差异
import { createRouter, createWebHistory } from "vue-router";
//createRouter方法，用于创建路由实例，管理多个路由

export default createRouter({
    // 路由模式设计
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue')
        }, {
            path: "/",
            redirect: '/home'
        },
    ],
    //设置每次路由跳转后，侧边滚动条回到上面
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})