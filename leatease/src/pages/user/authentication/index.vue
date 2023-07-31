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
        <el-form style="margin: 20px auto;width:60%;" ref="ruleFormRef" :rules="rules" label-width="100px"
            v-show="userInfo.authStatus === 0" :model="params">
            <el-form-item label="用户姓名:" prop="name">
                <el-input placeholder="请输入用户姓名" v-model="params.name"></el-input>
            </el-form-item>
            <el-form-item label="证件类型:" prop="certificatesType">
                <el-select style="width: 100%;" placeholder="请选择证件类型" v-model="params.certificatesType">
                    <el-option v-for="(types) in typeList" :key="types.id" :label="types.name"
                        :value="types.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="证件号码:" prop="certificatesNo">
                <el-input placeholder="请输入证件号码" v-model="params.certificatesNo"></el-input>
            </el-form-item>
            <el-form-item label="上传证件:" prop="certificatesUrl">
                <el-upload list-type="picture-card" ref="uplaod" :on-remove="handleRemove"
                    :on-preview="handlePictureCardPreview" :on-success="successHandler" :on-exceed="exceedHandler"
                    :limit="1" action="/api/oss/file/fileUpload?fileHost=userAuah">
                    <img style="width: 100%;" src="../../../assets/images/auth_example.png" alt="">
                </el-upload>
                <el-dialog v-model="dialogHandler">
                    <img w-full v-if="params.certificatesUrl" style="width: 100%;height: 100%;" alt="Preview Image"
                        :src="params.certificatesUrl" />
                </el-dialog>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
                <el-button type="primary" @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
import { WarningFilled } from '@element-plus/icons-vue'
import { onMounted, reactive, ref } from 'vue';
import { reqCertificates, reqUserAuth, reqUserInfo } from '@/api/user/index'
import { CertificatesTypeResponseData, CertificatesTypeList, UserInformatiomResponseData, AuthParams } from '@/api/user/type'
import { ElMessage } from 'element-plus';
onMounted(() => {
    getUserInfo()
    getType()
})
let userInfo = ref<any>({})
let typeList = ref<CertificatesTypeList>([])
let dialogHandler = ref<boolean>(false)
//获取ref实例
let uplaod = ref()
//表单校验
let ruleFormRef = ref()
//手机用户输入的表单数据
const params = reactive<AuthParams>({
    "certificatesNo": '',
    "certificatesType": '',
    "certificatesUrl": '',
    "name": ''
})
//获取用户信息
const getUserInfo = async () => {
    let result: UserInformatiomResponseData = await reqUserInfo()
    if (result.code === 200) {
        userInfo.value = result.data
    }
}
//获取证件类型
const getType = async () => {
    let result: CertificatesTypeResponseData = await reqCertificates()
    if (result.code === 200) {
        typeList.value = result.data
    }
}
//上传图片超出限制时的方法
const exceedHandler = () => {
    ElMessage({
        type: 'error',
        message: '最多上传一张图片'
    })
}
//上传图片成功的钩子
const successHandler = (response: any) => {
    // 上传成功清除表单验证结果
    ruleFormRef.value.clearValidate('certificatesUrl')
    params.certificatesUrl = response.data
}
//图片预览
const handlePictureCardPreview = () => {
    dialogHandler.value = true
}
//图片删除
//要清空已经存储的图片地址
const handleRemove = () => {
    params.certificatesUrl = ''
}
//重置按键，清空数据
const reset = () => {
    //清空图片
    uplaod.value.clearFiles()
    Object.assign(params, {
        "certificatesNo": '',
        "certificatesType": '',
        "certificatesUrl": '',
        "name": ''
    })
}
//提交，发送请求进行实名认证
const submit = async () => {
    //提交时，触发所有表单校验，并返回结果
    await ruleFormRef.value.validate()
    try {
        await reqUserAuth(params)
        ElMessage({
            type: 'success',
            message: '认证成功'
        })
        getUserInfo()
    } catch (error) {
        ElMessage({
            type: 'error',
            message: '认证失败'
        })
    }
}
//表单校验方法
//@ts-ignore
const validateName = (rule: any, value: any, callback: any) => {
    const reg = /^(?:[\u4e00-\u9fa5·]{2,16})$/
    if (reg.test(value)) {
        callback()
    } else {
        callback(new Error('请输入正确的姓名'))
    }
}
//@ts-ignore
const validateCertificatesType = (rule: any, value: any, callback: any) => {
    if (value === '10' || value === '20') {
        callback()
    } else {
        callback(new Error('请选择证件类型'))
    }
}
//@ts-ignore
const validateNo = (rule: any, value: any, callback: any) => {
    const sfz = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/
    const hkb = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (sfz.test(value) || hkb.test(value)) {
        callback()
    } else {
        callback(new Error('请输入正确的证件号码'))
    }
}
//@ts-ignore
const validateUrl = (rule: any, value: any, callback: any) => {
    if (value.length) {
        callback()
    } else {
        callback(new Error('请上传证件图片'))
    }
}

//表单校验规则
const rules = {
    name: [
        {
            required: true, validator: validateName
        }
    ],
    certificatesType: [
        {
            required: true, validator: validateCertificatesType, trriger: 'blur'
        }
    ],
    certificatesNo: [
        {
            required: true, validator: validateNo, trriger: 'blur'
        }
    ],
    certificatesUrl: [
        {
            required: true, validator: validateUrl, trriger: 'blur'
        }
    ]
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