import { useUserStore } from '@/store'
import router from '@/router'

import type { FormInst } from 'naive-ui'
import type { LoginInfo } from '@/types/request/login'

const store = useUserStore()

const login = (nform: FormInst | null, formData: LoginInfo) => {
    nform?.validate(async error => {
        if (!error) {
            try {
                await store.login({ ...formData })
                router.push({ path: '/', replace: true })
            } catch (e) {
                window.$message.error(JSON.stringify(e))
            }
        }
    })
}

export default login
