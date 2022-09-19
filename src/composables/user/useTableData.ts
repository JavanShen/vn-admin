import { getUserList } from '@/api/user'
import { ref } from 'vue'

import type { UserItem } from '@/types/request/user'

export default function useTableData() {
    const tableData = ref<UserItem[]>([])
    const loading = ref(false)

    const getData = async () => {
        loading.value = true
        try {
            const { data: res } = await getUserList()
            if (res.code === 0) {
                tableData.value = res.data
            }
        } catch (e) {
            window.$message.error('获取数据失败')
        }
        loading.value = false
    }

    getData()

    return {
        tableData,
        getData,
        loading
    }
}
