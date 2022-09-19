<!-- naive全局配置 -->
<template>
    <n-config-provider
        class="outer"
        :locale="store.locale"
        :theme="store.theme"
        :date-locale="store.dateLocale"
    >
        <n-message-provider>
            <n-loading-bar-provider>
                <App />
            </n-loading-bar-provider>
        </n-message-provider>
    </n-config-provider>
</template>

<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui'
import { useConfigStore } from '@/store'
import App from './App.vue'

const store = useConfigStore()
store.setLanguage({
    locale: zhCN,
    dateLocale: dateZhCN
})
</script>

<style scoped>
.outer {
    height: 100%;
}
</style>
