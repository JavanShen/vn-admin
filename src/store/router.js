import { defineStore } from "pinia";

const state = () => ({
    path: "",
    name: "",
    meta: {},
})

const getters = {
    role: state => state.meta.roles,
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
    }
}

const useRouterStore = defineStore("router", {
    state,
    getters,
    actions
})

export default useRouterStore