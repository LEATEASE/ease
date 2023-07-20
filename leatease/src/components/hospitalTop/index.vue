<template>
    <div class="top">
        <div class="context">
            <div class="left" @click="goHome">
                <img src="@/assets/images/logo.png" alt="">
                <p>樂安医 预约挂号一站式服务平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p>登录/注册</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
let $router = useRouter()
const goHome = () => {
    $router.push({ path: '/home' })
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