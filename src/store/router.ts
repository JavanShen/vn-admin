import { defineStore } from 'pinia'
import type { Meta } from '@/types/router'

const useRouterStore = defineStore('router', {
    state: () => ({
        path: '',
        name: '',
        meta: <Meta>{},
        pathMeta: <Map<string, Meta>>new Map()
    }),
    getters: {
        roles: state => state?.meta?.roles,
        title: state => state?.meta?.title
    },
    actions: {
        setPath(path: string) {
            this.path = path
        },
        setName(name: string) {
            this.name = name
        },
        setMeta(meta: Meta) {
            this.meta = meta
        },
        setPathMeta(path: string, meta: Meta) {
            this.pathMeta.set(path, meta)
        }
    }
})

export default useRouterStore
