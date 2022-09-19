<template>
    <n-scrollbar x-scrollable>
        <div class="history-bar">
            <n-space :wrap="false">
                <n-tag
                    v-for="(item, index) in history"
                    :key="item.id"
                    class="history-tag"
                    closable
                    :type="item.path === routerStore.path ? 'success' : 'default'"
                    @click="redirect(item)"
                    @close.stop="handelClose(index)"
                >
                    {{ item.title }}</n-tag
                >
            </n-space>
        </div>
    </n-scrollbar>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRouterStore } from '@/store'
import router from '@/router'

import type { Meta } from '@/types/router'

interface HistoryItem extends Meta {
    id: string
    path: string
}

const routerStore = useRouterStore()

const history = ref<HistoryItem[]>([])

const handelClose = (index: number) => {
    history.value.splice(index, 1)
}

const redirect = (item: HistoryItem) => {
    router.push({ path: item.path })
}

const addHistory = (val = routerStore.path) => {
    const meta = routerStore.pathMeta.get(val)
    if (meta && !history.value.find(item => item.path === val)) {
        history.value.push({
            id: val,
            path: val,
            ...meta
        })
    }
}

watch(
    () => [routerStore.path, routerStore.pathMeta?.size],
    () => {
        addHistory()
    }
)
</script>

<style scoped>
.history-bar {
    padding: 5px;
    height: 100%;
    width: 100%;
}

.history-tag {
    cursor: pointer;
}
</style>
