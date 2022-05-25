<!-- naive全局配置 -->
<template>
    <n-config-provider class="outer" :locale="zhCN" :date-locale="dateZhCN">
        <n-message-provider>
            <n-loading-bar-provider>
                <App />
            </n-loading-bar-provider>
        </n-message-provider>
    </n-config-provider>
</template>

<script setup>
import { zhCN, dateZhCN } from 'naive-ui'
import App from './App.vue'
</script>

<style scoped>
.outer {
    height: 100%;
}
</style>