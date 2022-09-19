<template>
    <n-breadcrumb>
        <n-breadcrumb-item v-for="item in paths" :key="item.id">
            <router-link v-if="item.isLeaf" :to="item.path">{{ item.name }}</router-link>
            <span v-else>{{ item.name }}</span>
        </n-breadcrumb-item>
    </n-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouterStore } from '@/store'

const store = useRouterStore()

const resolvePath = (path: string) => {
    let baseUrl = ''
    const paths = []

    const splitPath = path.split('/')

    if (splitPath[0] === '') {
        splitPath.shift()
    }

    for (const i of splitPath) {
        baseUrl += `/${i}`
        const meta = store.pathMeta.get(baseUrl)
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

const paths = computed(() => {
    if (store.path === '') return []
    return resolvePath(store.path)
})
</script>
