export function validateUserName(rule, value) {
    if (value.length >= 3 && value.length <= 10) {
        return true
    } else {
        return new Error('用户名长度为3-10位')
    }
}

export const validatePassword = (rule, value) => {
    //dosomthing
}