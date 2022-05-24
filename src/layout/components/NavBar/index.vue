<template>
    <div class="nav">
        <UserInfo />
    </div>
</template>

<script setup>
import UserInfo from './UserInfo.vue'
</script>

<style scoped>
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 5px 0;
    box-shadow: 0 2px 3px rgba(204, 204, 204, 0.67);
}
</style>