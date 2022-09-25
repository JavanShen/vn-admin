<template>
    <n-form ref="form" :model="userClone" :rules="rules">
        <n-form-item path="name" label="姓名">
            <n-input v-model:value="userClone.name" />
        </n-form-item>
        <n-form-item path="birthday" label="生日">
            <n-date-picker
                v-model:formatted-value="userClone.birthday"
                value-format="yyyy-MM-dd"
                type="date"
                clearable
            />
        </n-form-item>
        <n-form-item path="address" label="地址">
            <RegionsPicker v-model:region="userClone.address" />
        </n-form-item>
        <n-form-item path="email" label="邮箱">
            <n-auto-complete
                v-model:value="userClone.email"
                :input-props="{ autocomplete: 'disabled' }"
                :options="autoCompleteOptions"
                placeholder="邮箱"
            />
        </n-form-item>
        <n-form-item path="phone" label="电话">
            <n-input v-model:value="userClone.phone" />
        </n-form-item>
        <div style="text-align: right">
            <n-button type="primary" size="medium" @click="confirm">确认修改</n-button>
        </div>
    </n-form>
</template>

<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import type { UserItem } from '@/types/request/user'

import { computed, ref, watch } from 'vue'

import { isSameObject } from '@/utils/validate'
import rules from '../utils/editFormRules.js'

type User = Omit<UserItem, 'id' | 'birthday'> & { birthday: string | null }
interface Props {
    user: User
}

const form = ref<FormInst | null>(null)

const props = withDefaults(defineProps<Props>(), {
    user: () => ({
        name: '',
        birthday: null,
        address: '',
        email: '',
        phone: ''
    })
})

const emits = defineEmits(['confirm'])

const userClone = ref({ ...props.user })

watch(props.user, val => {
    userClone.value = { ...val }
})

const originalData = { ...props.user }

const autoCompleteOptions = computed(() => {
    return ['@gmail.com', '@163.com', '@qq.com'].map(suffix => {
        const prefix = props.user.email.split('@')[0]
        return {
            label: prefix + suffix,
            value: prefix + suffix
        }
    })
})

const confirm = () => {
    form?.value?.validate(error => {
        if (!error) {
            if (isSameObject(originalData, userClone.value, true)) {
                return window.$message.error('没有修改任何数据')
            }

            emits('confirm', { ...userClone.value })
            return true
        }
        return false
    })
}
</script>
