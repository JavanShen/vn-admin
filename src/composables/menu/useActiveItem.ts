import { onMounted, ref, watch } from 'vue'
import { useRouterStore } from '@/store'

import type { MenuInst } from 'naive-ui'

export default function useActiveItem() {
    const selectedKey = ref<string | null>(null)
    const menuRef = ref<MenuInst | null>(null)

    const store = useRouterStore()

    selectedKey.value = store.path
    onMounted(() => {
        menuRef.value?.showOption(store.path)
    })

    watch(
        () => store.path,
        path => {
            selectedKey.value = path
            menuRef.value?.showOption(path)
        }
    )

    return {
        selectedKey
    }
}
