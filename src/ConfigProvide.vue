<!-- naive全局配置 -->
<template>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
        <n-message-provider>
            <App />
        </n-message-provider>
    </n-config-provider>
</template>

<script setup>
import { zhCN, dateZhCN } from 'naive-ui'
import App from './App.vue'
</script>