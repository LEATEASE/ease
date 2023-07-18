<template>
    <div>
        <!-- 轮播图结构 -->
        <Carousel />
        <!-- 搜索框 -->
        <Search />
        <!-- 底部结构 -->
        <el-row :gutter="20">
            <el-col :span="20">
                <Sift />
                <div class="hospital">
                    <Card class="card_context" v-for="item in 10" :key="item" />
                </div>
                <!-- @size-change="handleSizeChange"
                @current-change="handleCurrentChange" -->
                <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
                    :page-sizes="[10, 20, 30, 40]" samll="true" layout=" prev, pager, next, jumper,->,sizes, total"
                    :total="100" />
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
import { ref } from 'vue'
const currentPage = ref<number>(1)
const pageSize = ref<number>(10)
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