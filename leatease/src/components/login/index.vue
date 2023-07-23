<template>
    <div class="login_container">
        <el-dialog v-model="userStore.visiable" title="用户登录">
            <el-row>
                <el-col :span="12">
                    <div class="login" v-show="handoff === 0">
                        <el-form :model="loginParams" :rules="rules" ref="form">
                            <el-form-item prop="phone">
                                <el-input placeholder="请输入手机号" :prefix-icon="User" v-model="loginParams.phone"></el-input>
                            </el-form-item>
                            <el-form-item prop="code">
                                <el-row style="width: 100%;">
                                    <el-col :span="16"><el-input placeholder="请输入手机验证码" :prefix-icon="Lock"
                                            v-model="loginParams.code"></el-input></el-col>
                                    <el-col :span="8">
                                        <el-button style="width: 100%;" :disabled="!isPhone || flag ? true : false"
                                            @click="getCode">
                                            <CountDown v-if="flag" :flag="flag" @getFlag="getFlag" />
                                            <span v-else>获取验证码</span>
                                        </el-button></el-col>
                                </el-row>
                            </el-form-item>
                        </el-form>
                        <el-button style="width: 100%;" type="primary"
                            :disabled="!isPhone || loginParams.code?.length !== 6 ? true : false"
                            @click="login">用户登录</el-button>
                        <div class="bottom">
                            <p @click="changeHandoff">微信扫码登录</p>
                            <svg @click="changeHandoff" t="1690011665688" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2627" width="36" height="36">
                                <path
                                    d="M683.058 364.695c11 0 22 1.016 32.943 1.976C686.564 230.064 538.896 128 370.681 128c-188.104 0.66-342.237 127.793-342.237 289.226 0 93.068 51.379 169.827 136.725 229.256L130.72 748.43l119.796-59.368c42.918 8.395 77.37 16.79 119.742 16.79 11 0 21.46-0.48 31.914-1.442a259.168 259.168 0 0 1-10.455-71.358c0.485-148.002 128.744-268.297 291.403-268.297l-0.06-0.06z m-184.113-91.992c25.99 0 42.913 16.79 42.913 42.575 0 25.188-16.923 42.579-42.913 42.579-25.45 0-51.38-16.85-51.38-42.58 0-25.784 25.93-42.574 51.38-42.574z m-239.544 85.154c-25.384 0-51.374-16.85-51.374-42.58 0-25.784 25.99-42.574 51.374-42.574 25.45 0 42.918 16.79 42.918 42.575 0 25.188-16.924 42.579-42.918 42.579z m736.155 271.655c0-135.647-136.725-246.527-290.983-246.527-162.655 0-290.918 110.88-290.918 246.527 0 136.128 128.263 246.587 290.918 246.587 33.972 0 68.423-8.395 102.818-16.85l93.809 50.973-25.93-84.677c68.907-51.93 120.286-119.815 120.286-196.033z m-385.275-42.58c-16.923 0-34.452-16.79-34.452-34.179 0-16.79 17.529-34.18 34.452-34.18 25.99 0 42.918 16.85 42.918 34.18 0 17.39-16.928 34.18-42.918 34.18z m188.165 0c-16.984 0-33.972-16.79-33.972-34.179 0-16.79 16.927-34.18 33.972-34.18 25.93 0 42.913 16.85 42.913 34.18 0 17.39-16.983 34.18-42.913 34.18z"
                                    fill="#09BB07" p-id="2628"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="wechat_login" v-show="handoff === 1">
                        <img src="../../assets/images/code_login_wechat.png" alt="">
                        <p @click="changeHandoff">手机验证码登录</p>
                        <p>
                            <svg @click="changeHandoff" t="1690012980387" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="5745" width="30" height="30">
                                <path
                                    d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z"
                                    p-id="5746"></path>
                            </svg>
                        </p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="right_container">
                        <div class="top">
                            <div class="item">
                                <img src="../../assets/images/code_login_wechat.png" />
                                <svg t="1690011665688" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2627" width="16" height="16">
                                    <path
                                        d="M683.058 364.695c11 0 22 1.016 32.943 1.976C686.564 230.064 538.896 128 370.681 128c-188.104 0.66-342.237 127.793-342.237 289.226 0 93.068 51.379 169.827 136.725 229.256L130.72 748.43l119.796-59.368c42.918 8.395 77.37 16.79 119.742 16.79 11 0 21.46-0.48 31.914-1.442a259.168 259.168 0 0 1-10.455-71.358c0.485-148.002 128.744-268.297 291.403-268.297l-0.06-0.06z m-184.113-91.992c25.99 0 42.913 16.79 42.913 42.575 0 25.188-16.923 42.579-42.913 42.579-25.45 0-51.38-16.85-51.38-42.58 0-25.784 25.93-42.574 51.38-42.574z m-239.544 85.154c-25.384 0-51.374-16.85-51.374-42.58 0-25.784 25.99-42.574 51.374-42.574 25.45 0 42.918 16.79 42.918 42.575 0 25.188-16.924 42.579-42.918 42.579z m736.155 271.655c0-135.647-136.725-246.527-290.983-246.527-162.655 0-290.918 110.88-290.918 246.527 0 136.128 128.263 246.587 290.918 246.587 33.972 0 68.423-8.395 102.818-16.85l93.809 50.973-25.93-84.677c68.907-51.93 120.286-119.815 120.286-196.033z m-385.275-42.58c-16.923 0-34.452-16.79-34.452-34.179 0-16.79 17.529-34.18 34.452-34.18 25.99 0 42.918 16.85 42.918 34.18 0 17.39-16.928 34.18-42.918 34.18z m188.165 0c-16.984 0-33.972-16.79-33.972-34.179 0-16.79 16.927-34.18 33.972-34.18 25.93 0 42.913 16.85 42.913 34.18 0 17.39-16.983 34.18-42.913 34.18z"
                                        fill="#8a8a8a" p-id="2628"></path>
                                </svg>
                                <p>微信扫一扫关注</p>
                                <p>“快速预约挂号”</p>
                            </div>
                            <div class="item">
                                <img style="width: 130px; height: 130px" src="../../assets/images/code_app.png" />
                                <svg t="1690012980387" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5745" width="16" height="16">
                                    <path
                                        d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z"
                                        p-id="5746"></path>
                                </svg>
                                <p>微信扫一扫下载</p>
                                <p>“预约挂号App”</p>
                            </div>
                        </div>
                        <div class="bottom">
                            <h1>樂安医官方指定平台</h1>
                            <h1>快速挂号 安全放心</h1>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <template #footer>
                <el-button type="primary" @click="closeDialog">
                    关闭窗口
                </el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import CountDown from '@/components/login/countDown/index.vue'
import { computed, reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
//获取用户数据仓库
import { ElMessage } from 'element-plus';
import useUserStore from '@/store/modules/user.ts'
const userStore = useUserStore()
let handoff = ref<number>(0)//控制手机登录0还是微信登录1
let flag = ref<boolean>(false)//控制验证码倒计时false不显示,true显示
const loginParams = reactive({
    phone: '',
    code: ''
})
let form = ref<any>()
// console.log(form);

//通过计算属性判断验证手机是否符合正则表达式
let isPhone = computed(() => {
    const reg: RegExp = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/;
    return reg.test(loginParams.phone)
})
//dialog窗口关闭后的事件
const closeDialog = () => {
    // console.log(123);
    // handoff.value = 0
    userStore.visiable = false
    // Object.assign(loginParams, { phone: '', code: '' })
    // //关闭窗口时，同时把表单校验结果清空
    // form.value.resetFields()
    // 第二种写法，在父组件直接控制显示与否，重新挂载
}
//切换手机登录的微信登录
const changeHandoff = () => {
    handoff.value = handoff.value === 0 ? 1 : 0
}
//获取验证码
const getCode = () => {
    flag.value = true//点击获取验证码后,进行倒计时
    userStore.getCode(loginParams.phone).then(() => {
        loginParams.code = userStore.code
        // console.log(123);
    }).catch((error) => {
        ElMessage({
            type: 'error',
            message: error.message
        })
    })
}
//计数器子组件绑定自定义事件
//当计数器为零时,通知父组件倒计时组件应该隐藏
const getFlag = (value: boolean) => {
    flag.value = value
}
//用户登录
const login = async () => {
    //表单校验结果
    await form.value.validate()

    userStore.getUserLogin(loginParams).then(() => {
        userStore.visiable = false
    }).catch((error) => {
        ElMessage({
            type: 'error',
            message: error.message
        })
    })
}
const ValidatorPhone = (rule: any, value: string, callBack: any) => {
    //rule表单校验规则对象
    //value:当前输入的文本内容
    //callBack:回调函数
    const reg: RegExp = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/;
    if (reg.test(value)) {
        //符合要求，放行/^\d{15,17}$/
        callBack()
    } else {
        callBack(new Error('请输入正确的手机号'))
    }
}
const ValidatorCode = (rule: any, value: string, callBack: any) => {
    //rule表单校验规则对象
    //value:当前输入的文本内容
    //callBack:回调函数
    const reg: RegExp = /^\d{6}$/;
    if (reg.test(value)) {
        //符合要求，放行/^\d{15,17}$/
        callBack()
    } else {
        callBack(new Error('请输入6位验证码'))
    }
}
//表单校验规则
const rules = reactive({
    phone: [{ trigger: 'change', validator: ValidatorPhone }],
    code: [{ trigger: 'change', validator: ValidatorCode }],
})
</script>

<style scoped lang="scss">
.login_container {
    :deep(.el-dialog__body) {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .wechat_login {
        border: 1px solid #ccc;
        padding: 20px;
        display: flex;
        // justify-content: center;
        flex-direction: column;
        align-items: center;

        img {
            width: 300px;
        }

        p {
            margin: 5px 0;
        }
    }

    .login {
        border: 1px solid #ccc;
        padding: 20px;

        .bottom {
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                margin: 15px 0 10px 0;
            }
        }
    }

    .right_container {
        .top {
            display: flex;
            justify-content: space-around;

            .item {
                display: flex;
                flex-direction: column;
                align-items: center;

                img {
                    width: 130px;
                    height: 130px;
                }
            }
        }

        .bottom {

            font-size: 24px;
            text-align: center;
            font-weight: 900;

            h1 {
                margin: 20px 0;
            }
        }
    }
}
</style>