import service from '@/utils/request'
import { UserItem } from '@/interface/request/user'

export function getUserList() {
    return service<UserItem[]>({
        url: '/user/list',
        method: 'get'
    })
}

export function updateUser(data: Omit<UserItem, 'id'>) {
    return service<UserItem>({
        url: '/user/update',
        method: 'post',
        data
    })
}
