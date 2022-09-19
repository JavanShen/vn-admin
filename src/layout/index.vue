<template>
    <n-layout class="lay-out">
        <n-layout-header class="header" bordered>
            <NavBar />
        </n-layout-header>
        <n-layout class="container" has-sider>
            <n-layout-sider
                class="slider"
                :collapsed-width="collapsedWidth"
                :collapsed="collapsed"
                :width="240"
                collapse-mode="width"
                bordered
                show-trigger
                @collapse="collapsed = true"
                @expand="collapsed = false"
            >
                <SlideBar :collapsed="collapsed" :collapsed-width="collapsedWidth" />
            </n-layout-sider>
            <n-layout>
                <n-layout-header position="absolute" bordered>
                    <HistoryBar />
                </n-layout-header>
                <n-layout-content
                    position="absolute"
                    :style="{ top: historyBarHeight }"
                    content-style="padding: 20px"
                    :native-scrollbar="false"
                >
                    <AppMain />
                </n-layout-content>
            </n-layout>
        </n-layout>
    </n-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useSaveRoute from '@/composables/router/useSaveRoute'

import NavBar from './components/NavBar/index.vue'
import SlideBar from './components/SlideBar/index.vue'
import HistoryBar from './components/HistoryBar.vue'
import AppMain from './components/AppMain.vue'

const collapsed = ref(false)
const collapsedWidth = 64

const headerHeight = '60px'
const historyBarHeight = '40px'

useSaveRoute()
</script>

<style scoped>
.header {
    height: v-bind(headerHeight);
}

.container {
    height: calc(100vh - v-bind(headerHeight));
}
</style>
