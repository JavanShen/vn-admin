import service from '@/utils/request'
import type { LoginInfo, UserInfo } from '@/types/request/login'

export function loginByUserName(info: LoginInfo) {
    return service<{ token: string }>({
        url: '/login',
        method: 'post',
        data: info
    })
}

export function getUserInfo(token: string) {
    return service<UserInfo>({
        url: '/user/info',
        method: 'post',
        data: {
            token
        }
    })
}
