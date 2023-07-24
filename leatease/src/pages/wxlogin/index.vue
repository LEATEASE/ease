<template>
    <div>

    </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { SET_TOKEN } from '@/util/user.ts';
import { useRoute } from 'vue-router';
let $route = useRoute()
// console.log($route.query);
SET_TOKEN(JSON.stringify($route.query))
//
let html: any = document.querySelector('html');
html.style.display = 'none';
</script>

<style scoped></style>