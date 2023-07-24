<template>
    <div class="container">
        <div class="top">
            <div class="hosname">北京XX医院</div>
            <div class="line"></div>
            <div>专科</div>
            <div class="spot">.</div>
            <div class="hosdepartment">多发性硬化专科门诊</div>
        </div>
        <div class="center">
            <h1 class="time">2023年7月24</h1>
            <div class="center_container">
                <div class="item" v-for="i in 6" :key="i">
                    <div class="item_top">123</div>
                    <div class="item_bottom">456</div>
                </div>
            </div>
            <el-pagination layout="prev,pager,next" :total="50" />
        </div>
    </div>
</template>

<script setup lang="ts">

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

            .item {
                flex: 1;
                border: 1px solid skyblue;
                margin: 0 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 50px;

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
}
</style>