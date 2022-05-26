import service from '@/utils/request';

export function getUserList() {
    return service({
        url: '/user/list',
        method: 'get'
    })
}

export function updateUser(data) {
    return service({
        url: '/user/update',
        method: 'post',
        data
    })
}