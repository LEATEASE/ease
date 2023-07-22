<template>
    <span>获取验证码({{ time }}s)</span>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
let props = defineProps(['flag'])
let $emit = defineEmits(['getFlag'])
let time = ref<number>(10)
//监视父组件传来的值,发生改变,则触发响应
watch(() => props.flag, () => {
    let timer = setInterval(() => {
        time.value--
        if (time.value === 0) {
            clearInterval(timer)
            $emit('getFlag', false)
        }
    }, 1000)
}, { immediate: true })
</script>

<style scoped></style>