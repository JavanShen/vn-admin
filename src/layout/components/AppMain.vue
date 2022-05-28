<template>
  <section class="container">
    <router-view v-slot="{Component, route}">
      <transition name="app-main" mode="out-in">
        <keep-alive :include="['Edit']">
          <div :key="route.name">
            <component :is="Component"/>
          </div>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script setup>
</script>

<style scoped>
.container {
  box-sizing: border-box;
  padding: 20px;
}
</style>