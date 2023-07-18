import { createApp } from 'vue'
import '@/style/reset.scss'
import App from './App.vue'
//注册全局组件
import HospitalTop from '@/components/hospitalTop/index.vue'
import HospitalBottom from '@/components/hospitalBottom/index.vue'
//引入路由
import router from '@/router/index'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
//设置elementplus国际化为中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app = createApp(App)
// 注册全局组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
//安装路由
app.use(router)
//安装element-plus
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')