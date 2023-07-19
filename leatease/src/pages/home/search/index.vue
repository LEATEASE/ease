<template>
    <div class="search">
        <el-autocomplete clearable placeholder="请输入医院名称" v-model="hosname" />
        <el-button type="primary" size="default" :icon="Search"></el-button>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
let hosname = ref<string>('')
</script>

<style scoped lang="scss">
.search {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    //修改element-plus要加深度选择器
    // 深度选择器，原生css:>>>  less:/deep/ scss:  ::v-deep  新版 :deep
    // ::v-deep .el-input__wrapper {
    //     width: 300px;
    // }
    :deep(.el-input__wrapper) {
        width: 500px;
        margin-right: 10px;
    }
}
</style>