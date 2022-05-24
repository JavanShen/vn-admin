<template>
    <n-layout has-sider>
        <n-layout-sider>
            <SlideBar />
        </n-layout-sider>
        <n-layout>
            <n-layout-header>
                <NavBar />
            </n-layout-header>
            <n-layout-content>
                <AppMain />
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script setup>
import NavBar from './components/NavBar'
import SlideBar from './components/SlideBar'
import AppMain from './components/AppMain'
</script>