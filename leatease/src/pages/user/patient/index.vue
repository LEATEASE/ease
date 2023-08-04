<template>
    <el-card class="box-card" shadow="always">
        <template #header>
            <div class="card-header">
                <span class="visitor">就诊人管理</span>
                <el-button type="success" :icon="User" @click="addVisitor">新增就诊人+</el-button>
            </div>
        </template>
        <!--展示所有就诊人的信息 -->
        <div class="visitor_box" v-if="scene === 0">
            <Visitor @changeScene="changeScene" @remove="remove" v-for="visitor in visitorList" :key="visitor.id"
                class="item" :visitor="visitor" :showDelete="showDelete" />
        </div>
        <div class="addoredit" v-if="scene === 1">
            <el-divider content-position="left">就诊人信息</el-divider>
            <el-form style="width: 50%;margin: 10px auto;" label-width="100px">
                <el-form-item label="就诊人">
                    <el-input placeholder="请填写就诊人姓名" v-model="AddVisitorParams.name"></el-input>
                </el-form-item>
                <el-form-item label="证件类型">
                    <el-select style="width: 100%;" placeholder="请选择证件类型" v-model="AddVisitorParams.certificatesType">
                        <el-option :label="certi.name" v-for="certi in certificates" :key="certi.id"
                            :value="certi.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="证件号码">
                    <el-input placeholder="请填写证件号码" v-model="AddVisitorParams.certificatesNo"></el-input>
                </el-form-item>
                <el-form-item label="用户性别">
                    <el-radio-group v-model="AddVisitorParams.sex">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="出生日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="AddVisitorParams.birthdate"
                        value-format="YYYY-MM-DD" />
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input placeholder="请填写手机号码" v-model="AddVisitorParams.phone"></el-input>
                </el-form-item>
            </el-form>
            <el-divider content-position="left">建档信息(完善后，部分医院首次就诊不排队建档)</el-divider>
            <el-form style="width: 50%;margin: 10px auto;" label-width="100px">
                <el-form-item label="婚姻状况">
                    <el-radio-group v-model="AddVisitorParams.isMarry">
                        <el-radio :label="1">已婚</el-radio>
                        <el-radio :label="0">未婚</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="医保/自费">
                    <el-radio-group v-model="AddVisitorParams.isInsure">
                        <el-radio :label="1">自费</el-radio>
                        <el-radio :label="0">医保</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="当前住址">
                    <el-cascader :props="props" v-model="AddVisitorParams.addressSelected" />
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input placeholder="请填写详细地址" v-model="AddVisitorParams.address"></el-input>
                </el-form-item>
            </el-form>
            <el-divider content-position="left">联系信息(选填)</el-divider>
            <el-form style="width: 50%;margin: 10px auto;" label-width="100px">
                <el-form-item label="紧急联系人">
                    <el-input placeholder="请填写姓名" v-model="AddVisitorParams.contactsName"></el-input>
                </el-form-item>
                <el-form-item label="证件类型">
                    <el-select style="width: 100%;" placeholder="请选择证件类型"
                        v-model="AddVisitorParams.contactsCertificatesType">
                        <el-option :label="certi.name" v-for="certi in certificates" :key="certi.id"
                            :value="certi.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="证件号码">
                    <el-input placeholder="请填写证件号码" v-model="AddVisitorParams.contactsCertificatesNo"></el-input>
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input placeholder="请填写手机号码" v-model="AddVisitorParams.contactsPhone"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">提交</el-button>
                    <el-button @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { reqCertificates, reqVisitorList, reqCityInfo, reqAddOrUpdataVisitor } from '@/api/user';
import { VisitorResonpData, VisitorList, CertificatesTypeResponseData, CertificatesTypeList, AddOrUpdataVisitor } from '@/api/user/type';
import { ref, onMounted, reactive, watch } from 'vue'
import { User } from '@element-plus/icons-vue'
import { ElMessage, type CascaderProps } from 'element-plus'
import { useRoute, useRouter } from 'vue-router';
let $router = useRouter()
let $route = useRoute()
let showDelete = ref<boolean>(true)
const visitorList = ref<VisitorList>([])
//控制场景的切换
let scene = ref<number>(0)
//存储证件类型
const certificates = ref<CertificatesTypeList>([])
//收集新增就诊人信息，用于发请求的参数
const AddVisitorParams = reactive<AddOrUpdataVisitor>({
    name: '',
    certificatesType: '',
    certificatesNo: '',
    sex: 0,
    birthdate: '',
    phone: '',
    isMarry: 0,
    isInsure: 0,
    addressSelected: [],
    address: '',
    contactsName: '',
    contactsCertificatesType: '',
    contactsCertificatesNo: '',
    contactsPhone: ''
})

onMounted(() => {
    getVisitorInfo()
    getCertificates()
    //从挂号页面跳转过来，直接切换到新增页面
    if ($route.query.type === 'add') {
        scene.value = 1
    }
    if ($route.query.type === 'edit') {
        scene.value = 1
    }
})
//获取就诊人信息
const getVisitorInfo = async () => {
    let result: VisitorResonpData = await reqVisitorList()
    visitorList.value = result.data

}
//获取证件类型
const getCertificates = async () => {
    let result: CertificatesTypeResponseData = await reqCertificates()
    if (result.code === 200) {
        certificates.value = result.data
    }
}
//切换场景
const addVisitor = () => {
    reset()
    scene.value = 1
}
const reset = () => {
    //每次进来把原表单的数据清空
    Object.assign(AddVisitorParams, {
        id: null,
        name: '',
        certificatesType: '',
        certificatesNo: '',
        sex: 0,
        birthdate: '',
        phone: '',
        isMarry: 0,
        isInsure: 0,
        addressSelected: [],
        address: '',
        contactsName: '',
        contactsCertificatesType: '',
        contactsCertificatesNo: '',
        contactsPhone: ''
    })
}
//自定义事件，子组件告诉父组件切换场景
const changeScene = (visitor: AddOrUpdataVisitor) => {
    scene.value = 1
    // console.log(visitor);
    Object.assign(AddVisitorParams, visitor)

}
//级联选择器

const props: CascaderProps = {
    lazy: true,
    async lazyLoad(node, resolve) {
        //@ts-ignore
        let result: any = await reqCityInfo(node.data.id || '86');
        const nodes = result.data.map((item: any) => {
            return {
                id: item.id,
                label: item.name,
                value: item.value,
                leaf: !item.hasChildren
            }
        })
        resolve(nodes)
    },
}
//提交新增或更新就诊人
const submit = async () => {
    try {
        await reqAddOrUpdataVisitor(AddVisitorParams)
        ElMessage({
            type: 'success',
            message: AddVisitorParams.id ? '更新成功' : '新增成功'
        })
        //如果是路由跳转过来的，成功之后，返回原路径
        if ($route.query.type) {
            $router.back()
        } else {
            scene.value = 0
        }
        getVisitorInfo()
    } catch (error) {
        ElMessage({
            type: 'error',
            message: AddVisitorParams.id ? '更新失败' : '新增失败'
        })
    }

}
//监听页面数据回来，进入更新就诊人信息页面
watch(() => visitorList.value, () => {
    if ($route.query.type === 'edit') {
        //通过传递过来的id找到就诊人的信息，发请求修改用户信息
        const visitor = visitorList.value.find((item: any) => {
            return item.id == $route.query.id
        })
        Object.assign(AddVisitorParams, visitor)
    }
})
//remove,删除成功后，重新获取页面数据
const remove = () => {
    getVisitorInfo()
}
</script>

<style scoped lang="scss">
.box-card {
    margin: 10px 0;

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .visitor {
            font-size: 18px;
        }
    }

    .visitor_box {
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
        align-items: flex-start;

        .item {
            width: 32%;
            // flex: 1;
            margin: 10px 16.5px 10px 0;

            &:nth-child(3n) {
                margin-right: 0;
            }
        }
    }
}
</style>