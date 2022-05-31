import { useRoute } from 'vue-router'
import { useRouterStore } from '@/store'
import { watch } from 'vue'

const store = useRouterStore()

export default function useSaveRoute() {
    const route = useRoute()

    save(route)
    watch(() => route.path, () => {
        save(route)
    })
}

function save(route){
    store.setPath(route.path)
    store.setName(route.name)
    store.setMeta(route.meta)
}
