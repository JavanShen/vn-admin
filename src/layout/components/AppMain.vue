<template>
  <section class="container">
    <router-view v-slot="{Component}">
      <transition name="app-main" mode="out-in">
        <keep-alive :include="['Edit']">
          <component :is="Component"/>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script setup>
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}
</style>