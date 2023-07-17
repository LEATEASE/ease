<template>
    <div>
        <el-carousel height="350px">
            <el-carousel-item v-for="item in 4" :key="item">
                <img src="@/assets/images/web-banner-1.png" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.el-carousel__item img {
    width: 100%;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>