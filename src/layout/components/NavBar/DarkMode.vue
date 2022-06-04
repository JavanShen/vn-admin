<template>
    <n-switch v-model:value="active" size="large">
        <template #checked-icon>
            <svg-icon icon-class="moon" />
        </template>
        <template #unchecked-icon>
            <svg-icon icon-class="sun" />
        </template>
    </n-switch>
</template>

<script setup>
import { ref, watch } from 'vue';
import { darkTheme } from 'naive-ui';
import { useConfigStore } from '@/store';

const store = useConfigStore()
const active = ref(store.theme ? true : false);

watch(active, (value) => {
    if (value) {
        store.setTheme(darkTheme);
    } else {
        store.setTheme(null);
    }
})
</script>