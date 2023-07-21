<template>
    <div class="info">
        <h1>{{ hospitalDetailInfo.hospitalDetail.hospital?.hosname }}查询与取消信息</h1>
        <el-empty description="暂无信息" />
    </div>
</template>

<script setup lang="ts">
import useDetailStore from '@/store/modules/hospitalDetail';
let hospitalDetailInfo = useDetailStore()
</script>

<style scoped lang="scss">
.info {
    h1 {
        font-size: 30px;
        text-align: center;
    }
}
</style>