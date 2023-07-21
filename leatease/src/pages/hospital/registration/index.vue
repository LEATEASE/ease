<template>
    <div class="register">
        <div class="top">
            <!-- 使用ts语法，前面有数据再执行 -->
            <div class="title">{{ hospitalDetailInfo.hospitalDetail.hospital?.hosname }}</div>
            <div class="level">
                <svg t="1689863588165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="2295" width="16" height="16">
                    <path
                        d="M569.6 121.6a19.2 19.2 0 0 1 22.08-18.9824c16.384 2.048 51.5584 25.3056 68.8832 43.392 21.376 19.776 27.0464 52.3712 11.872 78.656l-35.1808 60.9408 0.192-0.0064C614.2784 334.1312 625.7984 358.4 672 358.4h150.0672c42.4128 0 76.8 34.3872 76.8 76.8a76.8 76.8 0 0 1-0.5696 9.2992l-45.2672 371.2A76.8 76.8 0 0 1 776.8 883.2H422.4c-42.4128 0-76.8-34.3872-76.8-76.8V435.2c0-40.2944 31.0336-73.344 70.5024-76.544L416 358.4c21.3632-4.9408 41.1072-20.6912 59.2384-47.2384l86.752-150.2528c0.352-0.608 0.704-1.2096 1.0752-1.792C569.6 144.8512 569.6 139.9488 569.6 121.6zM192 358.4h38.4c35.3472 0 64 28.6528 64 64v396.8c0 35.3472-28.6528 64-64 64h-38.4c-35.3472 0-64-28.6528-64-64V422.4c0-35.3472 28.6528-64 64-64z"
                        fill="#59AAFF" p-id="2296"></path>
                </svg>
                <span>{{ hospitalDetailInfo.hospitalDetail.hospital?.param.hostypeString }}</span>
            </div>
        </div>
        <!-- 展示内容区域 -->
        <div class="content">
            <div class="left">
                <el-avatar :size="80"
                    :src="`data:image/jpeg;base64,${hospitalDetailInfo.hospitalDetail.hospital?.logoData}`" />
            </div>
            <div class="right">
                <div>挂号规则</div>
                <div class="time">
                    预约周期:{{ hospitalDetailInfo.hospitalDetail.bookingRule?.cycle }}天 放号时间:{{
                        hospitalDetailInfo.hospitalDetail.bookingRule?.releaseTime }}
                    停挂时间:{{ hospitalDetailInfo.hospitalDetail.bookingRule?.stopTime }}
                </div>
                <div class="address">
                    具体位置:{{ hospitalDetailInfo.hospitalDetail.hospital?.param.fullAddress }}
                </div>
                <div class="route">具体路线:{{ hospitalDetailInfo.hospitalDetail.hospital?.route }}</div>
                <div class="releasetime">
                    退号时间:就诊前一工作日前{{ hospitalDetailInfo.hospitalDetail.bookingRule?.quitTime }}取消
                </div>
                <div class="rule">预约挂号规则</div>
                <div class="ruleInfo" v-for="(item, index) in hospitalDetailInfo.hospitalDetail.bookingRule?.rule"
                    :key="index">
                    {{ item }}
                </div>
            </div>
        </div>
        <!-- 放置每一个医院的科室的数据 -->
        <div class="deparment">
            <el-tabs tab-position="left" style="height: 500px;width: 100%" :stretch="true">
                <el-tab-pane :label="deparment.depname" v-for="deparment in hospitalDetailInfo.hospitalDepartment"
                    :key="deparment.depcode">
                    <div class="showDepartment">
                        <h1>{{ deparment.depname }}</h1>
                        <ul>
                            <li v-for="item in deparment.children" :key="item.depcode">{{ item.depname }}</li>
                        </ul>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import useDetailStore from '@/store/modules/hospitalDetail';
let hospitalDetailInfo = useDetailStore()
// console.log(hospitalDetailInfo.hospitalDetail.hospital);
</script>

<style scoped lang="scss">
.register {
    .top {
        display: flex;
        align-items: center;

        .title {
            font-size: 30px;
            font-weight: 900;
        }

        .level {
            color: #7f7f7f;
            margin-left: 10px;
            height: 40px;
            text-align: center;
            line-height: 40px;

            span {
                margin-left: 5px;
            }
        }
    }

    .content {
        display: flex;
        margin-top: 20px;

        .left {
            width: 80px;

            :deep(.el-avatar) {
                --el-avatar-bg-color: none
            }
        }

        .right {
            flex: 1;
            font-size: 14px;
            margin-left: 20px;

            .time,
            .address,
            .route,
            .releasetime,
            .ruleInfo {
                margin-top: 10px;
                color: #7f7f7f;
            }

            .rule {
                margin: 10px 0px;
            }
        }
    }

    .deparment {
        width: 100%;
        height: 500px;
        display: flex;
        margin-top: 20px;

        .showDepartment {
            h1 {
                background-color: rgb(248, 248, 248);
            }

            // .infinite-list {
            //     &::-webkit-scrollbar {
            //         display: none;
            //     }
            // }

            ul {
                display: flex;
                flex-wrap: wrap;

                li {
                    width: 250px;
                }
            }
        }

        .leftNav {
            width: 80px;
            height: 100%;

            /* ul {
                width: 100%;
                height: 100%;
                background: rgb(248, 248, 248);
                display: flex;
                flex-direction: column;

                li {
                    flex: 1;
                    text-align: center;
                    color: #7f7f7f;
                    font-size: 14px;
                    line-height: 40px;

                    &.active {
                        border-left: 1px solid red;
                        color: red;
                        background: white;
                    }
                }
            } */
        }

        /* .deparmentInfo {
            flex: 1;
            margin-left: 20px;
            height: 100%;
            overflow: auto;

            &::-webkit-scrollbar {
                display: none;
            }

            .showDeparment {
                h1 {
                    background-color: rgb(248, 248, 248);
                    color: #7f7f7f;
                }

                ul {
                    display: flex;
                    flex-wrap: wrap;

                    li {
                        color: #7f7f7f;
                        width: 33%;
                        line-height: 30px;
                    }
                }
            }
        } */
    }
}
</style>