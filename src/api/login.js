import service from '@/utils/request';

export function loginByUserName(info) {
    return service({
        url: '/login',
        method: 'post',
        data: info
    })
}

export function getUserInfo(token) {
    return service({
        url: '/user/info',
        method: 'post',
        data:{
            token
        }
    })
}