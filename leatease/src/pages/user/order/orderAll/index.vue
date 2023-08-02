<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>挂号订单</span>
            </div>
        </template>
        <el-form :inline="true">
            <el-form-item label="就诊人">
                <el-select placeholder="请选择就诊人" v-model="patientId" @change="changeHandler">
                    <el-option label="所有就诊人" value=""></el-option>
                    <el-option :label="visitor.name" v-for="visitor in visitorInfo" :key="visitor.id"
                        :value="visitor.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select placeholder="请选择订单状态" v-model="orderStatus" @change="changeHandler">
                    <el-option label="全部状态" value=""></el-option>
                    <el-option :label="status.comment" v-for="status in statusList" :key="status.status"
                        :value="status.status"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-table stripe style="width: 100%" :data="orderAllInfo">
            <el-table-column label="就诊时间" prop="reserveDate" width="110px" />
            <el-table-column label="医院" prop="hosname" width="110px" />
            <el-table-column label="科室" prop="depname" width="150px" />
            <el-table-column label="医生" prop="title" width="100px" />
            <el-table-column label="服务费" prop="amount" />
            <el-table-column label="就诊人" prop="patientName" />
            <el-table-column label="订单状态" prop="param.orderStatusString" width="150px" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" link type="primary" @click="goDetail(scope.row)">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            layout=" prev, pager, next, jumper,->, sizes,total" :total="total" @current-change="pageChange"
            @size-change="sizeChange" />
    </el-card>
</template>

<script setup lang="ts">
import { reqOrderAllInfo, reqVisitorList, reqStatusList } from '@/api/user';
import { useRouter } from 'vue-router';
import type { Records, VisitorList, VisitorResonpData, StatusList, StatusListResponseData } from '@/api/user/type';
import { onMounted, ref } from 'vue'
let $router = useRouter()
let currentPage = ref<number>(1)
let pageSize = ref<number>(10)
//收集用户id
let patientId = ref<string>('')
//收集订单状态
let orderStatus = ref<string>('')
//存储订单信息
let orderAllInfo = ref<Records>([])
//存储订单总数
let total = ref<number>(0)
//存储就诊人信息
const visitorInfo = ref<VisitorList>([])
//存储订单状态
const statusList = ref<StatusList>([])
onMounted(() => {
    getOrderAllInfo()
    getVisitorInfo()
})
const getOrderAllInfo = async () => {
    let result = await reqOrderAllInfo(currentPage.value, pageSize.value, patientId.value, orderStatus.value)
    // console.log(result);
    if (result.code === 200) {
        orderAllInfo.value = result.data.records
        total.value = result.data.total
    }

}
//跳转到订单详情
const goDetail = (row: any) => {
    $router.push({ path: '/user/order', query: { orderId: row.id } })
}
//分页器页面切换
const pageChange = () => {
    getOrderAllInfo()
}
//每页显示个数发生改变
const sizeChange = () => {
    getOrderAllInfo()
}
//获取用户所有就诊人与订单状态
const getVisitorInfo = async () => {
    let result: VisitorResonpData = await reqVisitorList()
    let result1: StatusListResponseData = await reqStatusList()
    visitorInfo.value = result.data
    statusList.value = result1.data
}
//条件发生改变，重新发请求获取数据
const changeHandler = () => {
    console.log(123);

    getOrderAllInfo()
}
</script>

<style scoped></style>