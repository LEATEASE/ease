<template>
    <el-card class="box-card" shadow="hover">
        <div class="context">
            <div class="left">
                <div class="hospital_name">{{ hospitalInfo.hosname }}</div>
                <div class="tip">
                    <div class="level">
                        <svg t="1689648726115" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1853" width="20" height="20">
                            <path
                                d="M414.2 444.3h72.4v-38.2h-72.4v38.2z m0-81h72.4v-38.2h-72.4v38.2z m352.5 207c31.6-47.5 48.5-103.1 48.5-159.9 0-163.4-136.2-295.9-304.3-295.9-168 0-304.3 132.5-304.3 295.9 0 61.9 19.6 119.3 53 166.8L96.3 736.5l140 32.8L270 905.7l206.5-201.4c11.4 1.3 22.9 2 34.3 2 15.5 0 30.6-1.5 45.5-3.7L754.1 898l33.4-136.9 138.8-33-159.6-157.8zM615.2 206.4c4.8-0.7 9.7-1.2 14.6-1.2 56.4 0 102 45.9 102 102.5 0 4.9-0.5 9.7-1.1 14.4h-29.6c0.9-4.6 1.4-9.3 1.4-14.1 0-40.4-32.7-73.1-73-73.1-4.9 0-9.7 0.5-14.4 1.5v-30z m-207 486.7l-102 95.9-20.6-86.9-85.7-12.7 87.6-82.3c36.3 37.1 82.1 64.8 133.1 80.5l-12.4 5.5z m127.2-206v102.7h-48.7V487.1h-72.4v22.4h-46.1V282.3h286.2v227.2h-46.1v-22.4h-72.9z m202.9 218.6l-20 89-99.3-98.3-12.1-5.5c49.6-16.1 94.2-44.5 129.5-82.5l85.2 84.3-83.3 13zM608.2 406.1h-72.8v38.2h72.8v-38.2z m0-81h-72.8v38.2h72.8v-38.2z"
                                p-id="1854"></path>
                        </svg>
                        <span>{{ hospitalInfo.param.hostypeString }}</span>
                    </div>
                    <div class="time">
                        <svg t="1689649088709" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3356" width="20" height="20">
                            <path
                                d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM533.333333 362.666667a21.333333 21.333333 0 0 0-42.666666 0v170.666666a21.333333 21.333333 0 0 0 6.250666 15.082667l128 128a21.333333 21.333333 0 0 0 30.165334-30.165333L533.333333 524.501333V362.666667z"
                                fill="#3D3D3D" p-id="3357"></path>
                        </svg>
                        <span>每天{{ hospitalInfo.bookingRule.releaseTime }}放号</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="">
            </div>
        </div>
    </el-card>
</template>

<script setup lang="ts">
// 接收父组件传递过来的props
defineProps(['hospitalInfo'])
</script>

<style scoped lang="scss">
.context {
    display: flex;
    justify-content: space-between;

    .left {
        width: 70%;

        .tip {
            font-size: 12px;
            color: #7f7f7f;
            display: flex;
            justify-content: space-between;
            margin-top: 15px;

            .level,
            .time {
                display: flex;
                align-items: center;

                span {
                    margin-left: 5px;
                }
            }
        }
    }

    .right {
        img {
            width: 50px;
            height: 50px;
        }
    }
}
</style>