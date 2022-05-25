<template>
    <div class="nav">
        <div class="nav-title">
            <svg-icon icon-class="pineapple"></svg-icon>
            <span style="font-size: 20px; margin-left: 10px;">Apine</span>
        </div>
        <div class="avatar">
            <UserInfo />
        </div>
    </div>
</template>

<script setup>
import UserInfo from './UserInfo.vue'

defineProps({
    height: {
        type: String,
        default: '58px'
    }
})
</script>

<style scoped>
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: v-bind(height);
}

.nav-title{
    font-size: 34px;
    margin-left: 30px;
    display: flex;
    align-items: center;
}

.avatar {
    margin-right: 36px;
}
</style>