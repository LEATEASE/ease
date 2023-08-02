<template>
    <el-card class="box-card" shadow="always">
        <template #header>
            <div class="card-header">
                <span class="visitor">就诊人管理</span>
                <el-button type="success" :icon="User">新增就诊人+</el-button>
            </div>
        </template>
        <!--展示所有就诊人的信息 -->
        <div class="visitor_box">
            <Visitor v-for="visitor in visitorList" :key="visitor.id" class="item" :visitor="visitor"
                :showDelete="showDelete" />
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { reqVisitorList } from '@/api/user';
import { VisitorResonpData, VisitorList } from '@/api/user/type';
import { ref, onMounted } from 'vue'
import { User } from '@element-plus/icons-vue'
let showDelete = ref<boolean>(true)
const visitorList = ref<VisitorList>([])
onMounted(() => {
    getVisitorInfo()
})
//获取就诊人信息
const getVisitorInfo = async () => {
    let result: VisitorResonpData = await reqVisitorList()
    visitorList.value = result.data

}
</script>

<style scoped lang="scss">
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
}
</style>