<template>
    <n-form ref="form" :model="user" :rules="rules">
        <n-form-item path="name" label="姓名">
            <n-input v-model:value="user.name" />
        </n-form-item>
        <n-form-item path="birthday" label="生日">
            <n-date-picker v-model:formatted-value="user.birthday" value-format="yyyy-MM-dd" type="date" clearable />
        </n-form-item>
        <n-form-item path="address" label="地址">
            <RegionsPicker v-model:region="user.address" />
        </n-form-item>
        <n-form-item path="email" label="邮箱">
            <n-auto-complete v-model:value="user.email" :input-props="{ autocomplete: 'disabled' }"
                :options="autoCompleteOptions" placeholder="邮箱" />
        </n-form-item>
        <n-form-item path="phone" label="电话">
            <n-input v-model:value="user.phone" />
        </n-form-item>
        <div style="text-align: right">
            <n-button type="primary" size="medium" @click="confirm">确认修改</n-button>
        </div>
    </n-form>
</template>

<script setup>
import { computed, ref } from 'vue';
import rules from '../utils/editFormRules.js'

import { isSameObject } from '@/utils/validate.js'

const form = ref(null)

const props = defineProps({
    user: {
        type: Object,
        default: () => ({
            name: '',
            birthday: null,
            address: '',
            email: '',
            phone: '',
        }),
    },
})
const emits = defineEmits(['comfirm'])

const originalData = {...props.user}

const autoCompleteOptions = computed(() => {
    return ["@gmail.com", "@163.com", "@qq.com"].map((suffix) => {
        const prefix = props.user.email.split("@")[0];
        return {
            label: prefix + suffix,
            value: prefix + suffix
        };
    });
})

const confirm = () => {
    form.value.validate((error) => {
        if(!error) {
            if(isSameObject(originalData, form.value.model, true)){
                return window.$message.error("没有修改任何数据")
            }
            
            emits('confirm', {...form.value.model})
        }
    }).catch(() => {
        console.log('wrong info')
    });
}
</script>