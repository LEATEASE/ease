
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
let $route = useRoute()
console.log();

</script>

<style scoped></style>