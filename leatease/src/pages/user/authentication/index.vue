<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>实名信息</span>
            </div>
        </template>
        <div class="tip">
            <el-icon>
                <WarningFilled />
            </el-icon>
            <p>完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前实名认证。</p>
        </div>
        <!-- 完成实名后显示的结构 -->
        <el-descriptions v-show="userInfo.authStatus === 1" class="margin-top" :column="1" border
            style="margin: 20px auto;">
            <el-descriptions-item label-align="center" width="50px">
                <template #label>
                    <div class="cell-item">
                        用户姓名
                    </div>
                </template>
                {{ userInfo.name }}
            </el-descriptions-item>
            <el-descriptions-item label-align="center">
                <template #label>
                    <div class="cell-item">
                        证件类型
                    </div>
                </template>
                {{ userInfo.certificatesType === '10' ? '身份证' : '户口本' }}
            </el-descriptions-item>
            <el-descriptions-item label-align="center">
                <template #label>
                    <div class="cell-item">
                        证件号码
                    </div>
                </template>
                {{ userInfo.certificatesNo }}
            </el-descriptions-item>
        </el-descriptions>
        <!-- 没有实名认证显示的结构 -->
        <el-form style="margin: 20px auto;width:60%;" label-width="80px" v-show="userInfo.authStatus === 0">
            <el-form-item label="用户姓名:">
                <el-input placeholder="请输入用户姓名"></el-input>
            </el-form-item>
            <el-form-item label="证件类型:">
                <el-select style="width: 100%;">
                    <el-option>身份证</el-option>
                    <el-option>户口本</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="证件号码:">
                <el-input placeholder="请输入证件号码"></el-input>
            </el-form-item>
            <el-form-item label="上传证件:">
                <el-upload list-type="picture-card">
                    <img style="width: 100%;" src="../../../assets/images/auth_example.png" alt="">
                </el-upload>
                <el-dialog>
                    <img w-full alt="Preview Image" />
                </el-dialog>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">提交</el-button>
                <el-button type="primary">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
import { WarningFilled } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue';
import { reqUserInfo } from '@/api/user/index'
import { UserInformatiomResponseData } from '@/api/user/type'
onMounted(() => {
    getUserInfo()
})
let userInfo = ref<any>({})
//获取用户信息
const getUserInfo = async () => {
    let result: UserInformatiomResponseData = await reqUserInfo()
    if (result.code === 200) {
        userInfo.value = result.data
    }
}
</script>
<style scoped lang="scss">
.box-card {
    .tip {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #7f7f7f
    }
}
</style>