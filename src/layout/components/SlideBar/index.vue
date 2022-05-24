<template>
    <n-menu :options="store.menus" :render-label="renderMenuLabel" :render-icon="renderMenuIcon"></n-menu>
</template>

<script setup>
import { renderMenuLabel, renderMenuIcon } from './NavBarItem';
import { usePermissionStore } from '@/store';

const store = usePermissionStore();
</script>