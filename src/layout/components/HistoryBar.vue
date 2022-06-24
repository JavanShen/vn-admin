<template>
    <n-scrollbar x-scrollable>
        <div class="history-bar">
            <n-space :wrap="false">
                <n-tag v-for="(item, index) in history" :key="item.id" class="history-tag" closable
                    :type="item.path === routerStore.path ? 'success' : 'default'" @click="redirect(item)"
                    @close.stop="handelClose(index)">
                    {{ item.title }}</n-tag>
            </n-space>
        </div>
    </n-scrollbar>
</template>

<script setup>
import { watch, ref } from 'vue';
import { useRouterStore } from '@/store';
import router from "@/router";

const routerStore = useRouterStore()

const history = ref([])

const handelClose = (index) => {
    history.value.splice(index, 1)
}

const redirect = (item) => {
    router.push({ path: item.path })
}

watch(() => [routerStore.path, routerStore.pathMeta?.size], () => {
    addHistory()
})

function addHistory(val = routerStore.path) {
    const meta = routerStore.pathMeta.get(val)
    if (meta && (!history.value.find(item => item.path === val))) {
        history.value.push({
            id: val,
            path: val,
            ...meta
        })
    }
}
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