<template>
    <div class="sift">
        <div class="index">
            <h1>医院</h1>
            <div class="context">
                <div class="left">等级:</div>
                <ul class="right">
                    <li class="active">全部</li>
                    <li>三级甲等</li>
                    <li>三级甲等</li>
                    <li>三级甲等</li>
                    <li>三级甲等</li>
                    <li>三级甲等</li>
                </ul>
            </div>
            <div class="context">
                <div class="left">地区:</div>
                <ul class="right">
                    <li class="active">全部</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                    <li>天河区</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

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


    // .index {
    //     display: flex;

    //     li {
    //         margin: 10px 10px 0 0;
    //     }

    //     &>.active {
    //         color: #55a6fe;
    //     }

    //     li:hover {
    //         color: #55a6fe;
    //     }
    // }
}
</style>