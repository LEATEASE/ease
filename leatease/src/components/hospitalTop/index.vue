<template>
    <div class="top">
        <div class="context">
            <div class="left" @click="goHome">
                <img src="@/assets/images/logo.png" alt="">
                <p>樂安医 预约挂号一站式服务平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p @click="login" v-if="!userStore.userLoginInfo.name">登录/注册</p>
                <el-dropdown v-else>
                    <span class="el-dropdown-link">
                        {{ userStore.userLoginInfo.name }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>你好</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                            <!-- <el-dropdown-item divided>Action 5</el-dropdown-item> -->
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ArrowDown } from '@element-plus/icons-vue'
let $router = useRouter()
//获取用户数据仓库
import useUserStore from '@/store/modules/user.ts'
const userStore = useUserStore()
const goHome = () => {
    $router.push({ path: '/home' })
}
const login = () => {
    userStore.visiable = true
}
</script>

<style scoped lang="scss">
.top {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #bfbfbf;

    .context {
        width: 1200px;
        height: 100%;
        // vertical-align: center;
        background-color: white;
        display: flex;
        justify-content: space-between;

        .left {
            display: flex;
            align-items: center;


            img {
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }

            p {
                font-size: 20px;
                color: #55a6fe;
            }
        }

        .right {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #bbb;

            // justify-content: space-evenly;
            .help {
                margin-right: 10px;
            }
        }
    }
}
</style>