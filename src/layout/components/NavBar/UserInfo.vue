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
const options=[
    {
        label: '个人信息',
        key: 'userInfo'
    },
    {
        label: '退出登录',
        key: 'logout'
    }
]

const handelSelect=(key) => {
    console.log(key)
}
</script>

<style scoped>
.avatar {
    font-size: 60px;
}
</style>