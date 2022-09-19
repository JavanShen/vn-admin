<template>
    <section class="container">
        <router-view v-slot="{ Component, route }">
            <transition name="app-main" mode="out-in">
                <div>
                    <keep-alive>
                        <component v-if="route?.meta.keepAlive" :is="Component" :key="route.name" />
                    </keep-alive>
                    <component v-if="!route?.meta.keepAlive" :is="Component" :key="route.name" />
                </div>
            </transition>
        </router-view>
    </section>
</template>

<script setup lang="ts"></script>
