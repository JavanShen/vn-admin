<template>
    <n-menu :options="store.menus" :collapsed="collapsed" :collapsed-width="collapsedWidth" :render-label="renderMenuLabel" :render-icon="renderMenuIcon"></n-menu>
</template>

<script setup>
import { renderMenuLabel, renderMenuIcon } from './BarItem';
import { usePermissionStore } from '@/store';

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

const store = usePermissionStore();
</script>