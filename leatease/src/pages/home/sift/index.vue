<template>
    <div class="sift">
        <div class="index">
            <h1>医院</h1>
            <div class="context">
                <div class="left">等级:</div>
                <ul class="right">
                    <li :class="{ active: levelActiveFlag === '' }" @click="changeLevelFlag('')">全部</li>
                    <li v-for="item in hospitalLevel" :key="item.id" @click="changeLevelFlag(item.value)"
                        :class="{ active: levelActiveFlag === item.value }">{{ item.name }}
                    </li>
                </ul>
            </div>
            <div class="context">
                <div class="left">地区:</div>
                <ul class="right">
                    <li :class="{ active: regionActiveFlag === '' }" @click="changeRegionFlag('')">全部</li>
                    <li v-for="item in hospitalRegion" :key="item.id" :class="{ active: regionActiveFlag === item.value }"
                        @click="changeRegionFlag(item.value)">{{ item.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from '@/api/home';
import { onMounted, ref } from 'vue';
import type { HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData } from '@/api/home/type'
//接收数据
let hospitalLevel = ref<HospitalLevelAndRegionArr>([])
let hospitalRegion = ref<HospitalLevelAndRegionArr>([])
//定义active的flag
let levelActiveFlag = ref<string>('')
let regionActiveFlag = ref<string>('')
onMounted(() => {
    getLevel()
    getRegion()
})

const getLevel = async () => {
    let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('hostype')
    if (result.code === 200) {
        hospitalLevel.value = result.data
    }
}
const getRegion = async () => {
    let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('beijin')
    if (result.code === 200) {
        hospitalRegion.value = result.data
    }
}
let $emit = defineEmits(['getLevelAndRegion'])
//触发自定义事件
const changeLevelFlag = (value: string) => {
    levelActiveFlag.value = value
    $emit('getLevelAndRegion', levelActiveFlag.value, regionActiveFlag.value)
}
const changeRegionFlag = (value: string) => {
    regionActiveFlag.value = value
    $emit('getLevelAndRegion', levelActiveFlag.value, regionActiveFlag.value)
}
</script>

<style scoped lang="scss">
.sift {
    color: #7f7f7f;
    font-size: 14px;
    // line-height: 24px;

    .index {
        &>h1 {
            margin-bottom: 20px;
        }

        .context {
            display: flex;
            align-items: baseline;
            margin: 10px 0;

            .left {
                margin-right: 10px;
                white-space: nowrap;
                // height: 50px;
            }

            .right {
                display: flex;
                flex-wrap: wrap;

                li {
                    margin: 0 10px 10px 10px;
                }

                &>.active {
                    color: #55a6fe;
                }

                li:hover {
                    color: #55a6fe;
                }
            }
        }
    }
}
</style>