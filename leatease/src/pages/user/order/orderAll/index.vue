<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>挂号订单</span>
            </div>
        </template>
        <el-form :inline="true">
            <el-form-item label="就诊人">
                <el-select placeholder="请选择就诊人">
                    <el-option label="樂"></el-option>
                    <el-option label="樂安逸"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select placeholder="请选择订单状态">
                    <el-option label="樂"></el-option>
                    <el-option label="樂安逸"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-table stripe style="width: 100%">
            <el-table-column label="就诊时间" />
            <el-table-column label="医院" />
            <el-table-column label="科室" />
            <el-table-column label="医生" />
            <el-table-column label="服务费" />
            <el-table-column label="就诊人" />
            <el-table-column label="订单状态" />
            <el-table-column label="操作" />
        </el-table>
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            layout=" prev, pager, next, jumper,->, sizes,total" :total="400" />
    </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let currentPage = ref<number>(1)
let pageSize = ref<number>(10)
</script>

<style scoped></style>