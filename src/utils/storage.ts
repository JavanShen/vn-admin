import useRouterStore from '@/store/router'
import type { Meta } from '@/types/router'

type Store = ReturnType<typeof useRouterStore> | null
let store: Store = null
export default function savePathMeta(path: string, meta: Meta) {
    if (store === null) {
        store = useRouterStore()
    }
    store.setPathMeta(path, meta)
}
