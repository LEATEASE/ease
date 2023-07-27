<template>
    <div class="container">
        <!-- //顶部 -->
        <div class="top">
            <div class="hosname">{{ detailStore.hospitalBookingSchedule.baseMap?.hosname }}</div>
            <div class="line"></div>
            <div>{{ detailStore.hospitalBookingSchedule.baseMap?.bigname }}</div>
            <div class="spot">.</div>
            <div class="hosdepartment">{{ detailStore.hospitalBookingSchedule.baseMap?.depname }}</div>
        </div>
        <!-- //中间展示时间表 -->
        <div class="center">
            <h1 class="time">{{ detailStore.hospitalBookingSchedule.baseMap?.workDateString }}</h1>
            <div class="center_container">
                <div class="item"
                    :class="{ active: item.status === -1 || item.availableNumber === -1, item_hover: item.workDate === workTime.workDate }"
                    @click="changeWorkTime(item)" v-for="item in detailStore.hospitalBookingSchedule.bookingScheduleList"
                    :key="item.workDate">
                    <div class="item_top">{{ item.workDate }}</div>
                    <div class="item_bottom">
                        <div v-if="item.status === -1">停止挂号</div>
                        <div v-else-if="item.status === 0">
                            {{ item.availableNumber === -1 ? '无号' : `有号${item.availableNumber}` }}
                        </div>
                        <div v-else>即将放号</div>
                    </div>
                </div>
            </div>
            <el-pagination v-model:current-page="pageNo" layout="prev, pager, next"
                :total="detailStore.hospitalBookingSchedule?.total" @current-change="getBookingSchedule" />
        </div>
        <!-- //底部结构 -->
        <div class="bottom">
            <!-- //展示即将放号的时间 -->
            <div class="will" v-show="workTime.status === 1">
                <span class="date">{{ workTime.workDate }}</span>
                <span class="will_text">放号</span>
            </div>
            <div class="doctor" v-show="workTime.status !== 1">
                <div class="currentslot">
                    <div class="tip">
                        <svg t="1690277307719" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="5221" width="32" height="32">
                            <path
                                d="M904.101037 676.946871H118.670712c-15.461511 0-28.105271-12.535384-28.105271-28.033021 0-15.461511 12.643759-28.105271 28.105271-28.10527h785.430325c15.461511 0 28.105271 12.643759 28.105271 28.10527s-12.607634 28.033021-28.105271 28.033021z m-56.029916-324.980738c-11.018133 10.945883-28.719396 10.945883-39.665279 0-11.018133-10.945883-11.018133-28.755521 0-39.665279l39.665279-39.665279a27.97522 27.97522 0 0 1 39.593029 0 27.93187 27.93187 0 0 1 0 39.665279l-39.593029 39.665279z m-62.279545 212.776406c-26.082269-128.027094-138.683977-224.444789-274.441826-224.44479-135.649474 0-248.287307 96.417696-274.369576 224.44479H177.915755c21.602766-158.263741 162.454244-280.583081 333.433995-280.583081 171.088125 0 311.903478 122.31934 333.506244 280.583081h-59.064418z m-274.441826-336.612997c-15.461511 0-28.033021-12.535384-28.033021-28.10527V143.95823c0-15.461511 12.535384-28.105271 28.033021-28.10527 15.569886 0 28.105271 12.643759 28.10527 28.10527v56.029916c0 15.606011-12.535384 28.141396-28.10527 28.141396zM174.700628 351.966133L135.035349 312.264729c-10.945883-10.945883-10.945883-28.755521 0-39.665279 11.018133-10.945883 28.719396-10.945883 39.665279 0l39.665279 39.665279a27.93187 27.93187 0 0 1 0 39.665279c-10.909758 10.982008-28.647146 10.982008-39.665279 0.036125z m-28.033021 381.119029h729.40041c15.497636 0 28.033021 12.535384 28.03302 28.03302a28.033021 28.033021 0 0 1-28.03302 28.033021H146.667607c-15.497636 0-28.033021-12.535384-28.03302-28.033021 0.036125-15.497636 12.571509-28.033021 28.03302-28.03302z m84.171312 112.168207h561.093911c15.497636 0 28.033021 12.535384 28.033021 28.033021 0 15.569886-12.535384 28.105271-28.033021 28.10527H230.838919c-15.497636 0-28.033021-12.535384-28.03302-28.10527 0-15.497636 12.535384-28.033021 28.03302-28.033021z"
                                fill="#1296db" p-id="5222"></path>
                        </svg>
                        <span class="text">上午号源</span>
                    </div>
                    <div class="doc_info" v-for="item in morningDoctor" :key="item.id">
                        <div class="info_left">
                            <div class="info_item">
                                <span>{{ item.title }}</span>
                                <span>|</span>
                                <span>{{ item.docname }}</span>
                            </div>
                            <div class="info_skill">
                                {{ item.skill }}
                            </div>
                        </div>
                        <div class="info_right">
                            <div class="money">￥{{ item.amount }}</div>
                            <el-button type="primary" @click="goToStep2(item)">剩余{{ item.availableNumber }}</el-button>
                        </div>
                    </div>
                </div>
                <div class="currentslot">
                    <div class="tip">
                        <svg t="1690291704056" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3204" width="32" height="32">
                            <path
                                d="M914.0224 790.2208l5.12-5.12a20.48 20.48 0 0 0 5.12-19.2c-12.7488-49.5616-65.024-136.2432-174.08-134.2464l1.536-9.1648a20.48 20.48 0 0 0-3.5328-15.36c-1.3824-1.8944-23.9104-32.6144-72.6016-52.3264l14.592-113.92a40.96 40.96 0 0 0-29.0304-44.4928l13.3632-116.8384h14.848a32.768 32.768 0 0 0 32.6656-32.8192v-56.32a32.768 32.768 0 0 0-32.768-32.6656h-20.48c0-0.4096-0.4608-0.8192-0.768-1.2288l-60.0064-71.68A51.968 51.968 0 0 0 567.808 66.56l-327.168 0.8192a51.6096 51.6096 0 0 0-38.4 17.3056l-64.4608 72.704c-0.512 0.5632-0.8192 1.1776-1.28 1.7408h-26.2144a32.6656 32.6656 0 0 0-32.6144 32.8192v56.32a32.8192 32.8192 0 0 0 32.7168 32.6656h12.5952l14.2336 120.5248a40.192 40.192 0 0 0-10.24 8.448 40.96 40.96 0 0 0-9.7792 32.4096l33.792 252.2624a40.96 40.96 0 0 0 24.6784 32.256l21.2992 180.1728a49.8688 49.8688 0 0 0 49.5616 44.032H276.48a20.48 20.48 0 0 0 7.1168-1.3312 65.6384 65.6384 0 0 0 17.5616 4.5568 74.0864 74.0864 0 0 0 8.2432 0.4096c32.2048 0 65.3312-19.8656 84.992-35.84l12.2368 13.0048a20.48 20.48 0 0 0 22.6304 4.864l46.08-18.7904 1.6384 11.4176a20.48 20.48 0 0 0 20.48 17.5616H680.96a20.48 20.48 0 0 0 20.1728-17.152l2.7648-16.9472 53.8624 22.528a20.48 20.48 0 0 0 22.7328-4.7616l10.24-10.496c17.408 15.8208 48.7936 39.3216 81.5104 39.3216h3.072a65.4336 65.4336 0 0 0 50.2784-28.2112c40.0896-54.6816 6.2464-115.712-11.5712-140.9536zM233.0112 111.9232a10.5472 10.5472 0 0 1 7.8848-3.584l327.0144-0.8192a10.24 10.24 0 0 1 8.1408 3.7888l39.0656 46.5408-423.936 1.2288zM118.6304 200.1408l561.8688-1.5872v40.0896l-378.88 1.0752-160.6144 0.4608h-22.528zM632.832 279.7056L619.52 394.752l-441.7536 1.28L164.352 281.088l357.1712-1.024zM158.1056 437.0432l491.008-1.28-13.7216 107.52a248.9344 248.9344 0 0 0-48.6912-4.608 222.6176 222.6176 0 0 0-75.0592 12.0832 107.2128 107.2128 0 0 0-105.8816-91.9552h-0.3072A107.1104 107.1104 0 0 0 337.92 648.96a170.0352 170.0352 0 0 0-42.1376 40.192H191.7952z m276.48 172.2368a20.48 20.48 0 0 0-2.304 12.7488v0.9216a173.568 173.568 0 0 0-49.2544 5.6832 26.2656 26.2656 0 0 0-3.328-1.8432 66.1504 66.1504 0 0 1 25.6-127.0272 66.56 66.56 0 0 1 66.6112 65.9968 20.0192 20.0192 0 0 0 0.5632 4.6592 125.3888 125.3888 0 0 0-37.9392 38.8608z m-187.8528 301.056a8.96 8.96 0 0 1-8.9088-7.8848l-20.48-172.0832h54.784a184.32 184.32 0 0 0-11.264 35.328 20.48 20.48 0 0 0 5.12 18.176l6.0928 6.4c-17.2032 22.4768-46.08 70.7072-25.6 120.2176z m59.2896 3.3792a23.04 23.04 0 0 1-18.7904-13.8752c-15.6672-28.7744 0.9216-61.1328 13.7216-79.5136l65.4848 69.0688c-15.9744 12.0832-41.7792 26.368-60.416 24.32z m120.6784-20.48l-122.88-129.5872c8.704-28.2112 41.3696-105.3184 134.5536-99.6352l30.72 211.8656z m88.064 12.4416l-40.96-281.9072c9.8816-12.6976 41.7792-44.4928 112.64-44.4928s109.7216 32.1024 122.624 45.6704l-45.824 280.7296z m245.76-13.7728l-49.7664-20.992 32.4096-198.2976c91.392-5.4784 127.232 65.5872 137.7792 92.9792z m131.84 14.592a24.32 24.32 0 0 1-19.2 11.7248c-17.664 0.768-40.1408-15.36-54.4256-28.0576l66.56-69.6832c12.3904 20.3776 28.7744 56.832 6.9632 86.2208z"
                                fill="#1296db" p-id="3205"></path>
                            <path
                                d="M678.2464 628.3264c-32.8704-25.6-76.3904-22.9888-78.2336-22.8864a20.48 20.48 0 0 0 2.6112 40.96c0.3072 0 30.1056-1.536 50.4832 14.2848a20.48 20.48 0 0 0 25.1392-32.3072z"
                                fill="#1296db" p-id="3206"></path>
                        </svg>
                        <span class="text">下午号源</span>
                    </div>
                    <div class="doc_info" v-for="item in afternoonDoctor" :key="item.id">
                        <div class="info_left">
                            <div class="info_item">
                                <span>{{ item.title }}</span>
                                <span>|</span>
                                <span>{{ item.docname }}</span>
                            </div>
                            <div class="info_skill">
                                {{ item.skill }}
                            </div>
                        </div>
                        <div class="info_right">
                            <div class="money">￥{{ item.amount }}</div>
                            <el-button type="primary" @click="goToStep2(item)">剩余{{ item.availableNumber }}</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import useDetailStore from '@/store/modules/hospitalDetail'
import { reqDoctorWorkDate } from '@/api/hospital';
import { useRoute, useRouter } from 'vue-router';
import type { DoctorArr, Doctor } from '@/api/hospital/type';
let detailStore = useDetailStore()
let $route = useRoute()
//获取路由器对象
let $router = useRouter()
let pageNo = ref<number>(1)
let limit = ref<number>(6)
//获取当天的医生排班数据
let workTime: any = reactive({})
let doctorArr = ref<DoctorArr>([])
//加async，让下面的函数同步进行
onMounted(async () => {
    await getBookingSchedule()

})
const getBookingSchedule = async () => {
    await detailStore.getHospitalBookingSechedule(pageNo.value, limit.value, $route.query.hoscode as string, $route.query.depcode as string)
    workTime = detailStore.hospitalBookingSchedule?.bookingScheduleList[0]
    getDoctorWorkDate()
}
const getDoctorWorkDate = async () => {
    let result = await reqDoctorWorkDate($route.query.hoscode as string, $route.query.depcode as string, workTime.workDate)
    // console.log(result);
    doctorArr.value = result.data
}
const changeWorkTime = (item: any) => {
    workTime = item
    getDoctorWorkDate()
}
const morningDoctor = computed(() => {
    return doctorArr.value.filter((item: Doctor) => {
        return item.workTime === 0
    })
})
const afternoonDoctor = computed(() => {
    return doctorArr.value.filter((item: Doctor) => {
        return item.workTime === 1
    })
})
//点击跳转到就诊人信息选择界面
const goToStep2 = (item: Doctor) => {
    // console.log(item);
    $router.push({ path: '/hospital/register_step_2', query: { docId: item.id, hoscode: $route.query.hoscode } })
}
</script>

<style scoped lang="scss">
.container {

    .top {
        display: flex;
        color: #7f7f7f;
        margin: 30px 0;

        .line {
            // 
            width: 2px;
            height: 18px;
            background-color: #ccc;
            margin: 0 5px;
        }

        .spot {
            font-size: 5px;
            margin: 0 5px;
        }
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;

        .time {
            text-align: center;
            font-weight: 900;
        }

        .center_container {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            margin: 50px 0;

            .item {
                width: 16%;
                border: 1px solid skyblue;
                margin: 0 4px;
                display: flex;
                flex-direction: column;
                align-items: center;
                // justify-content: space-between;
                // justify-items: center;
                // justify-content: right;
                transition: all 0.2s;

                // margin-top: 50px;
                &.active {
                    border: 1px solid #ccc;

                    .item_top {
                        background-color: #ccc;
                    }
                }

                &.item_hover {
                    transform: scale(1.05);
                }

                .item_top {
                    width: 100%;
                    background: #e8f2ff;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                }

                .item_bottom {
                    width: 100%;
                    height: 60px;
                    text-align: center;
                    line-height: 60px;
                }
            }
        }
    }

    .bottom {
        margin-top: 20px;

        .will {
            text-align: center;
            font-size: 30px;
            font-weight: 700;

            .date {
                color: rgb(0, 183, 255);
            }
        }

        .doctor {
            .currentslot {
                .tip {
                    display: flex;
                    align-items: center;

                    .text {
                        color: #7f7f7f;
                        font-size: 16px;
                        font-weight: 900;
                    }
                }

                .doc_info {
                    display: flex;
                    justify-content: space-between;
                    margin: 10px 0;
                    border-bottom: 1px solid #ccc;

                    .info_left {
                        .info_item {
                            color: #55a6fe;
                            font-size: 20px;
                            font-weight: 400;

                            span {
                                margin: 0 5px;
                            }
                        }

                        .info_skill {
                            margin: 10px 5px;
                            color: #868686;
                        }
                    }

                    .info_right {
                        width: 20%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .money {
                            color: #868686;
                        }
                    }
                }
            }
        }
    }
}
</style>