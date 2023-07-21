<!--
 * @Author: LEATEASE 2112087898@qq.com
 * @Date: 2023-07-20 16:50:09
 * @LastEditors: LEATEASE 2112087898@qq.com
 * @LastEditTime: 2023-07-20 18:08:37
 * @FilePath: \leatease\leatease\src\pages\hospital\detail\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="detail">
        <!-- 医院名字与医院等级的结构 -->
        <div class="top">
            <div class="name">{{ hospitalDetailInfo.hospitalDetail.hospital?.hosname }}</div>
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
        <!-- 医院的logo与路线 -->
        <div class="logo">
            <div class="left">
                <el-avatar :size="80"
                    :src="`data:image/jpeg;base64,${hospitalDetailInfo.hospitalDetail.hospital?.logoData}`" />
            </div>
            <div class="right">
                <div class="address">
                    <svg t="1685240644574" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3302" width="16" height="16">
                        <path
                            d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"
                            fill="#3D3D3D" p-id="3303"></path>
                    </svg>
                    <span>具体位置:{{ hospitalDetailInfo.hospitalDetail.hospital?.param.fullAddress }}</span>
                </div>
                <div class="route">规划路线:{{ hospitalDetailInfo.hospitalDetail.hospital?.route }}</div>
            </div>
        </div>
        <!-- 医院介绍 -->
        <div class="footer">
            <h1>医院介绍</h1>
            <p>
                {{ hospitalDetailInfo.hospitalDetail.hospital?.intro }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
//获取医院详情仓库进行展示
import useDetailStore from '@/store/modules/hospitalDetail';
let hospitalDetailInfo = useDetailStore()
</script>

<style scoped lang="scss">
.detail {
    .top {
        display: flex;
        align-items: center;

        .name {
            font-size: 30px;
            font-weight: 900;
        }

        .level {
            color: #7f7f7f;
            margin-left: 10px;

            span {
                margin-left: 5px;
            }
        }
    }

    .logo {
        display: flex;
        margin: 30px 0px;

        .left {
            img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }

            :deep(.el-avatar) {
                --el-avatar-bg-color: none
            }
        }

        .right {
            color: #7f7f7f;
            margin-left: 10px;

            div {
                margin: 10px 0px;
            }
        }
    }

    .footer {
        color: #7f7f7f;

        p {
            margin-top: 10px;
            line-height: 30px;
        }
    }
}
</style>