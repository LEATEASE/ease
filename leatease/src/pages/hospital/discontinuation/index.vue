<!--
 * @Author: LEATEASE 2112087898@qq.com
 * @Date: 2023-07-20 16:52:03
 * @LastEditors: LEATEASE 2112087898@qq.com
 * @LastEditTime: 2023-07-20 18:01:13
 * @FilePath: \leatease\leatease\src\pages\hospital\discontinuation\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="info">
        <h1>{{ hospitalDetailInfo.hospitalDetail.hospital?.hosname }}停诊信息</h1>
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