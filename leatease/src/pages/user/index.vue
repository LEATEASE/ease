<template>
    <div class="user">
        <el-container>
            <el-aside width="250px">
                <!-- <h5 class="mb-2">Default colors</h5> -->
                <el-breadcrumb separator="/" class="bread">
                    <el-breadcrumb-item :to="{ path: '/' }">
                        <div style="display: flex;font-size: 16px;align-items: center;">
                            <el-icon>
                                <House />
                            </el-icon>
                            <span> Home</span>
                        </div>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>会员中心</el-breadcrumb-item>
                </el-breadcrumb>
                <!-- :router="true" -->
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
                    <el-menu-item index="/user/authentication" @click="changeActive('/user/authentication')">
                        <el-icon>
                            <Postcard />
                        </el-icon>
                        <span>实名认证</span>
                    </el-menu-item>
                    <el-menu-item index="/user/order" @click="changeActive('/user/order')">
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>挂号订单</span>
                    </el-menu-item>
                    <el-menu-item index="/user/patient" @click="changeActive('/user/patient')">
                        <el-icon>
                            <Setting />
                        </el-icon>
                        <span>就诊人管理</span>
                    </el-menu-item>
                    <el-menu-item index="/user/account" @click="changeActive('/user/account')">
                        <el-icon>
                            <User />
                        </el-icon>
                        <span>账号信息</span>
                    </el-menu-item>
                    <el-menu-item index="/user/feedback" @click="changeActive('/user/feedback')">
                        <el-icon>
                            <ChatDotRound />
                        </el-icon>
                        <span>意见反馈</span>
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
    Postcard,
    Setting,
    User,
    ChatDotRound,
    House,
} from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
//获取仓库对象
let $route = useRoute()
let $router = useRouter()
onMounted(() => {
})
const changeActive = (path: string) => {
    $router.push({ path: path })
}
</script>

<style scoped lang="scss">
.user {
    .bread {
        margin: 20px 0;
    }
}
</style>