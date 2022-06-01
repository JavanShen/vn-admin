<template>
    <n-dropdown trigger="hover" size="large" :options="options" @select="handelSelect">
        <n-avatar round size="large" color="white" bordered>
            <div class="avatar">
                <svg-icon icon-class="avatar"></svg-icon>
            </div>
        </n-avatar>
    </n-dropdown>
</template>

<script setup>
import useLogout from '@/composables/login/useLogout';

const options = [
    {
        label: '个人信息',
        key: 'userInfo'
    },
    {
        label: '退出登录',
        key: 'logout'
    }
]

const { logout } = useLogout();

const handelSelect = (key) => {
    if(key==='logout') {
        logout();
    }
}
</script>

<style scoped>
.avatar {
    font-size: 60px;
}
</style>