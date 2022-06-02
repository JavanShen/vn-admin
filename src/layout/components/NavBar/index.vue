<template>
    <div class="nav">
        <div class="left">
            <div class="nav-title">
                <svg-icon icon-class="pineapple"></svg-icon>
                <span style="font-size: 20px; margin-left: 10px;"><span :style="{ color: fontColor }">A</span>pine</span>
            </div>
        </div>
        <div class="right">
            <div class="dark-mode">
                <DarkMode />
            </div>
            <div class="avatar">
                <UserInfo />
            </div>
        </div>
    </div>
</template>

<script setup>
import UserInfo from './UserInfo.vue'
import DarkMode from './DarkMode.vue'

defineProps({
    height: {
        type: String,
        default: '58px'
    },
    fontColor: {
        type: String,
        default: '#41b883'
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

.left,.right {
    display: flex;
    align-items: center;
}

.nav-title {
    font-size: 34px;
    margin-left: 30px;
    display: flex;
    align-items: center;
}

.dark-mode {
    margin-right: 24px;
}

.avatar {
    margin-right: 36px;
}
</style>