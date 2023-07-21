/*
 * @Author: LEATEASE 2112087898@qq.com
 * @Date: 2023-07-16 18:07:04
 * @LastEditors: LEATEASE 2112087898@qq.com
 * @LastEditTime: 2023-07-20 21:12:34
 * @FilePath: \leatease\leatease\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import '@/style/reset.scss'
import App from './App.vue'
//注册全局组件
import HospitalTop from '@/components/hospitalTop/index.vue'
import HospitalBottom from '@/components/hospitalBottom/index.vue'
import Login from '@/components/login/index.vue'
//引入路由
import router from '@/router/index'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
//设置elementplus国际化为中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入pinia
import pinia from '@/store'
const app = createApp(App)
// 注册全局组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.component('Login', Login)
//安装路由
app.use(router)
//安装element-plus
app.use(ElementPlus, {
    locale: zhCn,
})
//安装pinia
app.use(pinia)
app.mount('#app')