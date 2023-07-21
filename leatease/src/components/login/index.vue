<template>
    <div class="login_container">
        <el-dialog v-model="userStore.visiable" title="用户登录">
            <el-row>
                <el-col :span="12">
                    <div class="login">
                        <el-form>
                            <el-form-item>
                                <el-input placeholder="你是来拉屎的吗"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="是的"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="验证码"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
                <el-col :span="12">你是来拉屎的吗</el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
//获取用户数据仓库
import useUserStore from '@/store/modules/user.ts'
const userStore = useUserStore()
</script>

<style scoped lang="scss">
.login_container {
    :deep(.el-dialog__body) {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
}
</style>