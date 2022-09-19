import { isEmail, isPhone } from '@/utils/validate'

import type { FormItemRule } from 'naive-ui'

function validateEmail(rule: FormItemRule, value: string) {
    if (value === '') return new Error('邮箱不能为空')
    if (isEmail(value)) {
        return true
    }
    return new Error('邮箱格式不正确')
}

function validatePhone(rule: FormItemRule, value: string) {
    if (value === '') return new Error('电话不能为空')
    if (isPhone(value)) {
        return true
    }
    return new Error('手机号码格式不正确')
}

const rules = {
    name: [
        {
            required: true,
            message: '姓名不能为空',
            trigger: ['blur']
        }
    ],
    birthday: [
        {
            required: true,
            validator: (rule: FormItemRule, value: string) => {
                if (value === '') return new Error('生日不能为空')
                return true
            },
            trigger: ['blur']
        }
    ],
    address: [
        {
            required: true,
            message: '地址不能为空',
            trigger: ['blur']
        }
    ],
    email: [
        {
            required: true,
            validator: validateEmail,
            trigger: ['blur']
        }
    ],
    phone: [
        {
            required: true,
            validator: validatePhone,
            trigger: ['blur']
        }
    ]
}

export default rules
