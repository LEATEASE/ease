<template>
    <div>
        <!-- 轮播图结构 -->
        <Carousel />
        <!-- 搜索框 -->
        <Search />
        <!-- 底部结构 -->
        <el-row :gutter="20">
            <el-col :span="20">
                <Sift @getLevelAndRegion="getLevelAndRegion" />
                <div class="hospital" v-if="hasHospitalArr.length > 0">
                    <Card class="card_context" v-for="item in hasHospitalArr" :key="item.id" :hospitalInfo="item" />
                </div>
                <el-empty v-else description="暂无数据" />
                <!-- @size-change="handleSizeChange"
                @current-change="handleCurrentChange" -->
                <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
                    :page-sizes="[2, 4, 6, 8, 10]" samll="true" layout=" prev, pager, next, jumper,->,sizes, total"
                    :total="total" @current-change="handleCurrentChange" @size-change="handleSizeChange" />
            </el-col>
            <el-col :span="4">好家伙</el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import Carousel from '@/pages/home/carousel/index.vue'
import Search from '@/pages/home/search/index.vue'
import Sift from '@/pages/home/sift/index.vue'
import Card from '@/pages/home/card/index.vue'
import { onMounted, ref } from 'vue'
//引入请求方法
import { reqHospital } from '@/api/home'
import type { Content, HospitalResponseData } from '@/api/home/type'
let currentPage = ref<number>(1)
let pageSize = ref<number>(10)
let hasHospitalArr = ref<Content>([])
let total = ref<number>(0)
//获取子组件传递的数据
let hostype = ref<string>('')
let districtCode = ref<string>('')
//组件挂载完毕，发请求获取数据
onMounted(() => {
    getHospitalData()
})
const getHospitalData = async () => {
    let result: HospitalResponseData = await reqHospital(currentPage.value, pageSize.value, hostype.value, districtCode.value)
    if (result.code === 200) {
        hasHospitalArr.value = result.data.content
        total.value = result.data.totalElements
    }
    // console.log(result);
}
const handleCurrentChange = () => {
    getHospitalData()
}
const handleSizeChange = () => {
    getHospitalData()
}
//通过自定义事件获取子组件传递的数据
const getLevelAndRegion = (hostype1: string, districtCode1: string) => {
    hostype.value = hostype1
    districtCode.value = districtCode1
    getHospitalData()
}
</script>

<style scoped lang="scss">
.hospital {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card_context {
        width: 48%;
        margin: 5px 0;
    }
}
</style>