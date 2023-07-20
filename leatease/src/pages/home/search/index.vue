<template>
    <div class="search">
        <el-autocomplete @select="goDetail" :trigger-on-focus="false" clearable placeholder="请输入医院名称" v-model="hosname"
            :fetch-suggestions="fetchData" />
        <el-button type="primary" size="default" :icon="Search"></el-button>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
//要进行路由跳转，引入useRouter
import { useRouter } from 'vue-router';
import { reqHospitalInfo } from '@/api/home';
import type { HospitalKeywordsResponseData } from '@/api/home/type';
let hosname = ref<string>('')
//创建路由器对象
let $router = useRouter()
const fetchData = async (keyword: string, cb: any) => {
    // console.log(keyword, cb);
    let result: HospitalKeywordsResponseData = await reqHospitalInfo(keyword)
    // console.log(result.data);
    //elementplus展示这里要展示的数据必须要有value属性，现在进行数据处理
    let showData = result.data.map(item => {
        return {
            value: item.hosname,//展示医院，名字
            hoscode: item.hoscode//存储医院编码
        }
    })
    // console.log(showData);
    cb(showData)
}
//点击选中医院名字，进行路由跳转，并且带参数
const goDetail = (item: any) => {
    console.log(item);
    //点击推荐项目，进入hospital页面，将来要携带query参数（医院编码）
    $router.push({ path: '/hospital/registration', query: { hoscode: item.hoscode } })
}

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