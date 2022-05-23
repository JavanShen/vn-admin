import { getToken, setToken, removeToken } from '@/utils/auth'
import { loginByUserName, getUserInfo } from '@/api/login'
import { defineStore } from 'pinia'

const state = () => {
    return {
        token: getToken(),
        userInfo: {}
    }
}

const getters = {
    roles:state=>state.userInfo?.roles,
}

const actions = {
    setToken(token) {
        this.token = token
        setToken(token);
    },
    setUserInfo(userInfo) {
        this.userInfo = userInfo
    },
    login(data) {
        return loginByUserName(data).then(res => {
            let data = res.data;
            if (data.code === 0) {
                this.setToken(data.data.token);
                return data.data.token;
            } else {
                return Promise.reject(data.msg);
            }
        })
    },
    logout() {
        this.setToken('');
        this.setUserInfo({});
        removeToken();
    },
    getUserInfo(token) {
        return getUserInfo(token).then(res => {
            let data = res.data;
            if (data.code === 0) {
                this.setUserInfo(data.data);
                return data.data;
            } else {
                return Promise.reject(data.msg);
            }
        })
    }
}

const useUserStore = defineStore('user', {
    state,
    getters,
    actions
})

export default useUserStore