import { useRoute } from 'vue-router'
import { useRouterStore } from '@/store'
import { watch } from 'vue'

const routerStore = useRouterStore()

export default function useSaveRoute() {
    const route = useRoute()

    save(route)
    watch(() => route.path, () => {
        save(route)
    })
}

function save(route){
    routerStore.setPath(route.path)
    routerStore.setName(route.name)
    routerStore.setMeta(route.meta)
}
