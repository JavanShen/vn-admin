import { useUserStore, usePermissionStore } from '@/store'
import router from '@/router'
import { removeToken } from '@/utils/auth'

export default function useLogout() {
    const logout = () => {
        const userStore = useUserStore()
        const permissionStore = usePermissionStore()

        removeToken()

        userStore.$reset()

        router.push({ path: '/login', replace: true }).then(() => {
            permissionStore.$reset()
        })
    }

    return {
        logout
    }
}
