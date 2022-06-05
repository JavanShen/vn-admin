<template>
    <n-breadcrumb>
        <n-breadcrumb-item v-for="item in paths" :key="item.id">
            <router-link v-if="item.isLeaf" :to="item.path">{{ item.name }}</router-link>
            <span v-else>{{ item.name }}</span>
        </n-breadcrumb-item>
    </n-breadcrumb>
</template>

<script setup>
import { computed } from 'vue';
import { useRouterStore } from '@/store'

const store = useRouterStore()

const paths = computed(() => {
    if (store.path === '') return []
    return resolvePath(store.path)
})

function resolvePath(path) {
    let baseUrl = '',
        paths = []

    path = path.split('/')

    if (path[0] === '') {
        path.shift()
    }

    for (let i of path) {
        baseUrl += `/${i}`
        let meta = store.pathMeta.get(baseUrl)
        if (meta) {
            paths.push({
                id: baseUrl,
                name: meta.title,
                path: baseUrl,
                isLeaf: meta.isLeaf
            })
        }
    }

    return paths
}
</script>