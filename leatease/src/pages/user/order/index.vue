<template>
    <div v-if="$route.query.orderId">
        <OrderDetail />
    </div>
    <div v-else>
        <OrderAll />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import OrderAll from "@/pages/user/order/orderAll/index.vue"
import OrderDetail from "@/pages/user/order/orderDetail/index.vue"
let $route = useRoute()
</script>

<style scoped></style>