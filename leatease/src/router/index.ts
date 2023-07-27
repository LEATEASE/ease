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
            component: () => import('@/pages/hospital/index.vue'),
            children: [
                {
                    path: 'registration',
                    component: () => import('@/pages/hospital/registration/index.vue')
                },
                {
                    path: 'register_step_1',
                    component: () => import('@/pages/hospital/registration/register_step_1.vue')
                },
                {
                    path: 'register_step_2',
                    component: () => import('@/pages/hospital/registration/register_step_2.vue')
                },
                {
                    path: 'detail',
                    component: () => import('@/pages/hospital/detail/index.vue')
                },
                {
                    path: 'notice',
                    component: () => import('@/pages/hospital/notice/index.vue')
                },
                {
                    path: 'discontinuation',
                    component: () => import('@/pages/hospital/discontinuation/index.vue')
                },
                {
                    path: 'search',
                    component: () => import('@/pages/hospital/search/index.vue')
                },
                {
                    path: "/hospital",
                    redirect: '/hospital/registration'
                },
            ]
        },
        {
            path: '/wxlogin',
            component: () => import('@/pages/wxlogin/index.vue')
        },
        {
            path: '/user',
            component: () => import('@/pages/user/index.vue'),
            children: [
                {
                    path: 'authentication',
                    component: () => import('@/pages/user/authentication/index.vue')
                },
                {
                    path: 'account',
                    component: () => import('@/pages/user/account/index.vue')
                },
                {
                    path: 'feedback',
                    component: () => import('@/pages/user/feedback/index.vue')
                },
                {
                    path: 'order',
                    component: () => import('@/pages/user/order/index.vue')
                },
                {
                    path: 'patient',
                    component: () => import('@/pages/user/patient/index.vue')
                },
                {
                    path: "/user",
                    redirect: '/hospital/authentication'
                },
            ]
        },
        {
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