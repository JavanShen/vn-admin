<template>
    <div class="nav">
        <div class="left">
            <div class="nav-title">
                <svg-icon icon-class="pineapple"></svg-icon>
                <span style="font-size: 20px; margin-left: 10px"
                    ><span :style="{ color: fontColor }">A</span>pine</span
                >
            </div>
            <div class="bread-crumb">
                <BreadCrumb />
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

<script setup lang="ts">
import UserInfo from './UserInfo.vue'
import DarkMode from './DarkMode.vue'
import BreadCrumb from './BreadCrumb.vue'

defineProps({
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
    height: 100%;
}

.left,
.right {
    display: flex;
    align-items: center;
}

.nav-title {
    font-size: 34px;
    margin-left: 30px;
    display: flex;
    align-items: center;
}

.bread-crumb {
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.bread-crumb::before {
    content: '';
    display: inline-block;
    width: 3px;
    height: 19px;
    background-color: v-bind(fontColor);
    margin-right: 5px;
    border-radius: 3px;
    opacity: 0.8;
}

.dark-mode {
    margin-right: 24px;
}

.avatar {
    margin-right: 36px;
}
</style>
