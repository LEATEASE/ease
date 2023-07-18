<template>
    <div class="container">
        <HospitalTop />
        <div class="context">
            <RouterView></RouterView>
        </div>
        <HospitalBottom />
    </div>
</template>

<script setup lang="ts">
// test
// import request from '@/util/request'
// import { onMounted } from 'vue';
// onMounted(() => {
//     request.get('/hosp/hospital/1/10').then(res => {
//         console.log(res);

//     })
// })
</script>

<style scoped lang="scss">
.container {
    display: flex;
    // justify-content: center;
    flex-direction: column;
    align-items: center;

    .context {
        margin-top: 70px;
        width: 1200px;
        min-height: 700px;
        background-color: #fff;
    }
}
</style>