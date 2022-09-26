import useRouterStore from '@/store/router'
import type { Meta } from '@/types/router'

type Store = ReturnType<typeof useRouterStore> | null
let store: Store = null
export default function savePathMeta(path: string, meta: Meta) {
    import('@/store').then(module => {
        if (store === null) {
            store = module.useRouterStore()
        }
        store.setPathMeta(path, meta)
    })
}
