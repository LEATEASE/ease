<template>
    <div class="container">
        <h1 class="tip">确认挂号信息</h1>
        <el-card class="box-card" shadow="always">
            <template #header>
                <div class="card-header">
                    <span class="visitor">请点击选择就诊人</span>
                    <el-button type="success" :icon="User">新增就诊人+</el-button>
                </div>
            </template>
            <!--展示所有就诊人的信息 -->
            <div class="visitor_box">
                <Visitor @click="selected(visitor.id)" v-for="visitor in visitorList" :visId="visId" :key="visitor.id"
                    class="item" :visitor="visitor" />
            </div>
        </el-card>
        <!-- 展示挂号信息 -->
        <el-card class="card_info">
            <template #header>
                <div class="card-message">
                    <span>挂号信息</span>
                </div>
            </template>
            <el-descriptions class="margin-top" :column="2" border>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            就诊日期:
                        </div>
                    </template>
                    {{ doctorInfo.workDate }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            就诊医院:
                        </div>
                    </template>
                    {{ doctorInfo.param?.hosname }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            就诊科室:
                        </div>
                    </template>
                    {{ doctorInfo.param?.depname }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            医生姓名:
                        </div>
                    </template>
                    {{ doctorInfo.docname }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            医生职称:
                        </div>
                    </template>
                    {{ doctorInfo.title }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            医生专长:
                        </div>
                    </template>
                    {{ doctorInfo.skill }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            治理服务费:
                        </div>
                    </template>
                    <span class="amount">{{ doctorInfo.amount }}</span>
                </el-descriptions-item>
            </el-descriptions>
        </el-card>
        <div class="btn">
            <el-button type="primary" :disabled="visId === 0 ? true : false" @click="submitOrder">立即挂号</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { User } from '@element-plus/icons-vue'
import Visitor from '@/pages/hospital/registration/visitor.vue'
import { onMounted, ref } from 'vue';
import { reqSubmitOrder, reqVisitorList } from '@/api/user';
import { reqDoctorInfo } from "@/api/hospital"
import type { VisitorResonpData, VisitorList } from '@/api/user/type';
import { useRoute, useRouter } from 'vue-router';
import { DoctorInfoResponseData } from '@/api/hospital/type';
import { ElMessage } from 'element-plus';
//存储就诊人列表信息
let visitorList = ref<VisitorList>([])
//存储医生信息
let doctorInfo = ref<any>({})
let $route = useRoute()
let $router = useRouter()
let visId = ref<number>(0)
onMounted(() => {
    fecthVisitorList()
    fetchDoctorInfo()
})
//发送请求获取就诊人信息列表
const fecthVisitorList = async () => {
    let result: VisitorResonpData = await reqVisitorList()
    if (result.code === 200) {
        visitorList.value = result.data
    }
}
//发送请求获取医生信息
const fetchDoctorInfo = async () => {
    let result: DoctorInfoResponseData = await reqDoctorInfo($route.query.docId as string)
    if (result.code === 200) {
        doctorInfo.value = result.data
    }

}
//点击选择就诊人
const selected = (visitorId: number) => {
    visId.value = visitorId
}
//立即挂号按钮事件处理函数
const submitOrder = async () => {
    // console.log('6225753136a9ba1be763dc13');
    let result = await reqSubmitOrder($route.query.hoscode as string, $route.query.docId as string, visId.value)
    if (result.code === 200) {
        //路由跳转携带参数
        $router.push({ path: '/user/order', query: { orderId: result.data } })
    } else {
        ElMessage({
            type: 'error',
            message: result.message || '操作失败'

        })
    }
}
</script>
<style scoped lang="scss">
.container {
    .tip {
        color: #231007;
        margin: 20px 0;
        font-size: 20px;
    }

    .box-card {
        margin: 10px 0;

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .visitor {
                font-size: 18px;
            }
        }
    }

    .visitor_box {
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
        align-items: flex-start;

        .item {
            width: 32%;
            // flex: 1;
            margin: 10px 16.5px 10px 0;

            &:nth-child(3n) {
                margin-right: 0;
            }
        }
    }

    .amount {
        color: crimson;
    }

    .btn {
        display: flex;
        justify-content: center;
        // align-items: center;
        margin-top: 10px;
    }
}
</style>