<template>
    <div class="hospital">
        <el-container>
            <el-aside width="250px">
                <!-- <h5 class="mb-2">Default colors</h5> -->
                <el-breadcrumb separator="/" class="bread">
                    <el-breadcrumb-item :to="{ path: '/' }">
                        <el-icon>
                            <House />
                        </el-icon>
                        <span> Home</span>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>医院详情信息</el-breadcrumb-item>
                </el-breadcrumb>
                <!-- :router="true" -->
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
                    <el-menu-item index="/hospital/registration" @click="changeActive('/hospital/registration')">
                        <el-icon>
                            <Calendar />
                        </el-icon>
                        <span>预约挂号</span>
                    </el-menu-item>
                    <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>医院详情</span>
                    </el-menu-item>
                    <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
                        <el-icon>
                            <Bell />
                        </el-icon>
                        <span>预约通知</span>
                    </el-menu-item>
                    <el-menu-item index="/hospital/discontinuation" @click="changeActive('/hospital/discontinuation')">
                        <el-icon>
                            <Warning />
                        </el-icon>
                        <span>停诊信息</span>
                    </el-menu-item>
                    <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
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
import { useRoute, useRouter } from 'vue-router';
//引入小仓库
import useDetailStore from '@/store/modules/hospitalDetail'
import { onMounted } from 'vue';
//获取仓库对象
let detailStore = useDetailStore()
let $route = useRoute()
let $router = useRouter()
//组件挂载完成：通知pinia仓库发请求获取医院详情数据，存储在仓库中
onMounted(() => {
    //获取医院详情数据
    detailStore.getHospitalDetail($route.query.hoscode as string);
    // 获取医院科室数据
    detailStore.getDepartment($route.query.hoscode as string)
})
const changeActive = (path: string) => {
    $router.push({ path: path, query: { hoscode: $route.query.hoscode } })
}
</script>

<style scoped lang="scss">
.hospital {
    .bread {
        margin: 20px 0;
    }
}
</style>