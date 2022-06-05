import { defineStore } from "pinia";

const state = () => ({
    path: "",
    name: "",
    meta: {},
    pathMeta: new Map(),
})

const getters = {
    roles: state => state.meta.roles,
    title: state => state.meta.title,
}

const actions = {
    setPath(path) {
        this.path = path
    },
    setName(name) {
        this.name = name
    },
    setMeta(meta) {
        this.meta = meta
    },
    setPathMeta(path, meta) {
        this.pathMeta.set(path, meta)
    },
}

const useRouterStore = defineStore("router", {
    state,
    getters,
    actions
})

export default useRouterStore