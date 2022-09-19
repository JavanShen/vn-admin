<template>
    <n-scrollbar>
        <n-menu
            ref="menuRef"
            v-model:value="selectedKey"
            :options="store.menus"
            :collapsed="collapsed"
            :collapsed-width="collapsedWidth"
            :render-label="renderMenuLabel"
            :render-icon="renderMenuIcon"
        ></n-menu>
    </n-scrollbar>
</template>

<script setup lang="ts">
import useActiveItem from '@/composables/menu/useActiveItem'
import { usePermissionStore } from '@/store'
import { renderMenuLabel, renderMenuIcon } from './BarItem'

defineProps({
    collapsed: {
        type: Boolean,
        default: false
    },
    collapsedWidth: {
        type: Number,
        default: 60
    }
})

const store = usePermissionStore()

const { selectedKey } = useActiveItem()
</script>
