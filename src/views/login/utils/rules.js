function validateUserName(rule, value) {
    if (value.length >= 3 && value.length <= 10) {
        return true
    } else {
        return new Error('用户名长度为3-10位')
    }
}

const rules={
    username: [
        {
            required: true,
            validator: validateUserName,
            trigger: ['blur','input']
        }
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: ['blur']
        }
    ]
}

export default rules