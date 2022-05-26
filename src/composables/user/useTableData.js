import { getUserList } from "@/api/user";
import { ref } from "vue";

export default function useTableData() {
    const tableData = ref([]);
    const loading = ref(false)

    const getData = async () => {
        loading.value = true
        try {
            const { data: res } = await getUserList();
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