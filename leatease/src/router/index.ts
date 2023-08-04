//新版本和以前写法有差异
import { createRouter, createWebHistory } from "vue-router";
//createRouter方法，用于创建路由实例，管理多个路由

export default createRouter({
    // 路由模式设计
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue'),
            meta: { title: '首页' }
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue'),
            children: [
                {
                    path: 'registration',
                    component: () => import('@/pages/hospital/registration/index.vue'),
                    meta: { title: '预约挂号' }
                },
                {
                    path: 'register_step_1',
                    component: () => import('@/pages/hospital/registration/register_step_1.vue'),
                    meta: { title: '预约挂号步骤一' }
                },
                {
                    path: 'register_step_2',
                    component: () => import('@/pages/hospital/registration/register_step_2.vue'),
                    meta: { title: '预约挂号步骤二' }
                },
                {
                    path: 'detail',
                    component: () => import('@/pages/hospital/detail/index.vue'),
                    meta: { title: '医院详情' }
                },
                {
                    path: 'notice',
                    component: () => import('@/pages/hospital/notice/index.vue'),
                    meta: { title: '预约通知' }
                },
                {
                    path: 'discontinuation',
                    component: () => import('@/pages/hospital/discontinuation/index.vue'),
                    meta: { title: '停诊信息' }
                },
                {
                    path: 'search',
                    component: () => import('@/pages/hospital/search/index.vue'),
                    meta: { title: '查询与取消' }
                },
                {
                    path: "/hospital",
                    redirect: '/hospital/registration'
                },
            ]
        },
        {
            path: '/wxlogin',
            component: () => import('@/pages/wxlogin/index.vue'),
            meta: { title: '微信登录' }
        },
        {
            path: '/user',
            component: () => import('@/pages/user/index.vue'),
            children: [
                {
                    path: 'authentication',
                    component: () => import('@/pages/user/authentication/index.vue'),
                    meta: { title: '实名认证' }
                },
                {
                    path: 'account',
                    component: () => import('@/pages/user/account/index.vue'),
                    meta: { title: '账号信息' }
                },
                {
                    path: 'feedback',
                    component: () => import('@/pages/user/feedback/index.vue'),
                    meta: { title: '反馈信息' }
                },
                {
                    path: 'order',
                    component: () => import('@/pages/user/order/index.vue'),
                    meta: { title: '挂号订单' }
                },
                {
                    path: 'patient',
                    component: () => import('@/pages/user/patient/index.vue'),
                    meta: { title: '就诊人管理' }
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
