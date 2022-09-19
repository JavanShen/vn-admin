import { useRoute } from 'vue-router'
import { useRouterStore } from '@/store'
import { watch } from 'vue'

const store = useRouterStore()

const save = (route: ReturnType<typeof useRoute>) => {
    store.setPath(route.path)
    store.setName((route.name || '') as string)
    store.setMeta(route.meta)
}

export default function useSaveRoute() {
    const route = useRoute()

    save(route)
    watch(
        () => route.path,
        () => {
            save(route)
        }
    )
}
