<template>
    <el-card class="box-card" shadow="hover" :class="{ select_active: visId === visitor.id }">
        <template #header>
            <div class="card-header">
                <div class="header_left">
                    <span class="free">{{ visitor.isInsure === 1 ? '医保' : '自费' }}</span>
                    <span class="username">{{ visitor.name }}</span>
                </div>
                <div class="header_right">
                    <el-button type="primary" circle :icon="Edit" @click="handler"></el-button>
                    <el-popconfirm @confirm="removeVisitor" :title="`你确定要删除${visitor.name}吗?`" width="200px">
                        <template #reference>
                            <el-button type="danger" circle :icon="Delete" v-show="showDelete"></el-button>
                        </template>
                    </el-popconfirm>
                </div>
            </div>
        </template>
        <div class="visitor_info">
            <p>证件类型:{{ visitor.param.certificatesTypeString }}</p>
            <p>证件号码:{{ visitor.certificatesNo }}</p>
            <p>就诊人性别:{{ visitor.sex === 1 ? '男' : '女' }}</p>
            <p>出生日期:{{ visitor.birthdate }}</p>
            <p>手机号码:{{ visitor.phone }}</p>
            <p>婚姻状况:{{ visitor.isMarry === 1 ? '已婚' : '未婚' }}</p>
            <p>当前住址:{{ visitor.param.fullAddress }}</p>
            <!-- <div class="confirm">已选择</div> -->
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { Edit, Delete } from '@element-plus/icons-vue';
import { useRouter, useRoute } from 'vue-router';
import { reqRemoveVisitor } from '@/api/user/index'
import { ElMessage } from 'element-plus';
//接收父组件传来的数据
const props = defineProps(['visitor', 'visId', 'showDelete'])
let $emit = defineEmits(['changeScene', 'remove'])
let $router = useRouter()
let $route = useRoute()
//点击编辑按钮，跳转告诉父组件切换到编辑页面，且携带当前就诊人的信息
const handler = () => {
    if ($route.path === '/user/patient') {
        $emit('changeScene', props.visitor)
    } else {
        $router.push({ path: '/user/patient', query: { type: 'edit', id: props.visitor.id } })
    }
}
//确认删除就诊人的回调
const removeVisitor = async () => {
    try {
        await reqRemoveVisitor(props.visitor.id)
        ElMessage({
            type: 'success',
            message: '删除成功'
        })
        //触发自定义事件，删除成功后，通知父组件更新数据
        $emit('remove')
    } catch (error) {
        ElMessage({
            type: 'error',
            message: '删除失败'
        })
    }
}
</script>

<style scoped lang="scss">
.box-card {
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #e5e5e5;
        padding: 10px;

        .header_left {
            display: flex;
            align-items: center;

            .free {
                margin-right: 5px;
                background-color: #fff;
                padding: 4px;
                font-size: 12px;
                border-radius: 6px;
            }

            .username {
                // color: #7f7f7f;
                font-size: 18px;
            }
        }
    }

    .visitor_info {
        position: relative;
        height: 300px;

        p {
            // margin: 10px 0;
            font-size: 14px;
            line-height: 35px;
        }

        // .confirm {
        //     position: absolute;
        //     left: 10%;
        //     top: 0;
        //     width: 200px;
        //     color: red;
        //     height: 200px;
        //     border: 1px dashed red;
        //     line-height: 200px;
        //     text-align: center;
        //     font-size: 20px;
        //     border-radius: 50%;
        //     opacity: 0.3;
        //     transform: rotate(45deg);
        // }

    }

    :deep(.el-card__header) {
        padding: 0;
    }
}

.select_active {
    border: 1px solid #55a6fe;
}
</style>