import { ref } from 'vue'

import type { UserItem } from '@/types/request/user'

type User = Omit<UserItem, 'id' | 'birthday'> & { birthday: string | null }
export default function useTableEdit() {
    const user = ref<User>({
        name: '',
        birthday: null,
        address: '',
        email: '',
        phone: ''
    })

    const showModal = ref(false)

    const openEdit = (row: User) => {
        user.value = { ...row }
        showModal.value = true
    }

    const editConfirm = (form: User) => {
        window.$message.success(`数据发生了变化: ${JSON.stringify(form)}`)
        showModal.value = false
    }

    return {
        user,
        showModal,
        openEdit,
        editConfirm
    }
}
