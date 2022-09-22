import { getToken, setToken, removeToken } from '@/utils/auth'
import { loginByUserName, getUserInfo } from '@/api/login'
import { defineStore } from 'pinia'
import type { UserInfo, LoginInfo } from '@/interface/user'

const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: getToken(),
            userInfo: <Partial<UserInfo>>{}
        }
    },
    getters: {
        roles: state => state.userInfo?.roles
    },
    actions: {
        setToken(token: string) {
            this.token = token
            setToken(token)
        },
        setUserInfo(userInfo: Partial<UserInfo>) {
            this.userInfo = userInfo
        },
        login(info: LoginInfo) {
            return loginByUserName(info).then(res => {
                const { data } = res
                if (data.code === 0) {
                    this.setToken(data.data.token)
                    return data.data.token
                }
                return Promise.reject(data.msg)
            })
        },
        logout() {
            this.setToken('')
            this.setUserInfo({})
            removeToken()
        },
        getUserInfo(token: string) {
            return getUserInfo(token).then(res => {
                const { data } = res
                if (data.code === 0) {
                    this.setUserInfo(data.data)
                    return data.data
                }
                return Promise.reject(data.msg)
            })
        }
    }
})

export default useUserStore
