<template>
    <el-card class="box-card">
        <template #header>
            <div class="detail">挂号详情</div>
        </template>
        <div class="top">
            <el-tag type="success">
                <div class="tag">
                    <svg t="1690531384564" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2331" width="16" height="16">
                        <path
                            d="M892.064 261.888a31.936 31.936 0 0 0-45.216 1.472L421.664 717.248l-220.448-185.216a32 32 0 1 0-41.152 48.992l243.648 204.704a31.872 31.872 0 0 0 20.576 7.488 31.808 31.808 0 0 0 23.36-10.112L893.536 307.136a32 32 0 0 0-1.472-45.248z"
                            p-id="2332" fill="#1afa29"></path>
                    </svg>
                    <span>预约成功，待支付</span>
                </div>
            </el-tag>
            <div class="right_info">
                <img src="../../../../assets/images/code_login_wechat.png" alt="">
                <div class="info">
                    <p>微信关注樂安医公众号</p>
                    <p>快速预约挂号</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <el-container>
                <el-aside width="35%">
                    <el-descriptions class="margin-top" :column="1" border>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    就诊人信息
                                </div>
                            </template>
                            樂安逸
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    就诊日期
                                </div>
                            </template>
                            18100000000
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    就诊医院
                                </div>
                            </template>
                            Suzhou
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    就诊科室
                                </div>
                            </template>
                            精神科
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    医生职称
                                </div>
                            </template>
                            你好
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    医事服务费
                                </div>
                            </template>
                            你好
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    挂号订单
                                </div>
                            </template>
                            你好
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    挂号时间
                                </div>
                            </template>
                            你好
                        </el-descriptions-item>
                    </el-descriptions>
                    <div class="btn">
                        <el-button>取消预约</el-button>
                        <el-button type="primary">支付</el-button>
                    </div>
                </el-aside>
                <el-main>
                    <el-card class="box-card2">
                        <template #header>
                            注意事项
                        </template>
                        <p>1.罗德岛对外声称是一家制药公司，但实际上是混合了感染者成员在内，拥有完整独立武装力量与矿石感染研究与检疫手段的一个组织，是感染者问题的专家。
                        </p>
                        <p>2.罗德岛的核心建筑是一支移动舰。</p>
                        <p>3.罗德岛前身为巴别塔，而其本舰由特蕾西娅及其追随者在雷姆必拓发掘，根据舰上文件而命名</p>
                        <p>4.罗德岛制药公司作为感染者问题专家，聘用感染者，深入危险地区，通过种种手段，已经成功解决了数起感染者引发的事件。</p>
                        <p>5.而今，他们将面对史无前例的感染者暴乱。在各个势力间游走，发掘不为人知的内幕，抵挡感染者的疯狂进攻，你的决策将决定罗德岛的方向。</p>

                    </el-card>
                </el-main>
            </el-container>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { reqGetOrderInfo } from '@/api/user';
import { useRoute } from 'vue-router';
//组件挂载完毕，获取数据
onMounted(() => {
    getOrderInfo()
})
let $route = useRoute()
const getOrderInfo = async () => {
    let result = await reqGetOrderInfo($route.query.orderId as string)
    console.log(result);
}
</script>

<style scoped lang="scss">
.box-card {
    .detail {
        font-size: 20px;
        font-weight: bold;
        color: #7f7f7f;
        margin: 10px 0;
    }

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #e4e7ed;

        .tag {
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                margin-left: 5px;
            }
        }

        .right_info {
            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                width: 40px;
                height: 40px;
            }

            .info {
                margin-left: 10px;

                p {
                    font-size: 12px;
                    line-height: 20px;
                }
            }

        }
    }

    .bottom {
        margin-top: 20px;

        .btn {
            margin: 10px 0;
        }

        .el-main {
            padding: 0;
            margin-left: 20px;

            .box-card2 {
                p {
                    font-size: 14px;
                    line-height: 25px;
                }
            }
        }
    }
}
</style>