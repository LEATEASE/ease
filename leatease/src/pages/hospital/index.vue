<!--
 * @Author: LEATEASE 2112087898@qq.com
 * @Date: 2023-07-17 10:31:43
 * @LastEditors: LEATEASE 2112087898@qq.com
 * @LastEditTime: 2023-07-20 21:40:16
 * @FilePath: \leatease\leatease\src\pages\hospital\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="hospital">
        <el-container>
            <el-aside width="250px">
                <!-- <h5 class="mb-2">Default colors</h5> -->
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">
                        <el-icon>
                            <House />
                        </el-icon>
                        <span> Home</span>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>医院详情信息</el-breadcrumb-item>
                </el-breadcrumb>
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :router="true">
                    <el-menu-item index="/hospital/registration">
                        <el-icon>
                            <Calendar />
                        </el-icon>
                        <span>预约挂号</span>
                    </el-menu-item>
                    <el-menu-item index="/hospital/detail">
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>医院详情</span>
                    </el-menu-item>
                    <el-menu-item index="/hospital/notice">
                        <el-icon>
                            <Bell />
                        </el-icon>
                        <span>预约通知</span>
                    </el-menu-item>
                    <el-menu-item index="/hospital/discontinuation">
                        <el-icon>
                            <Warning />
                        </el-icon>
                        <span>停诊信息</span>
                    </el-menu-item>
                    <el-menu-item index="/hospital/search">
                        <el-icon>
                            <Search />
                        </el-icon>
                        <span>查询/取消</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <RouterView></RouterView>
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import {
    Document,
    Calendar,
    Bell,
    Warning,
    Search,
    House,
} from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';
//引入小仓库
import useDetailStore from '@/store/modules/hospitalDetail'
import { onMounted } from 'vue';
//获取仓库对象
let detailStore = useDetailStore()
let $route = useRoute()
//组件挂载完成：通知pinia仓库发请求获取医院详情数据，存储在仓库中
onMounted(() => {
    detailStore.getHospitalDetail($route.query.hoscode);
})
</script>

<style scoped></style>