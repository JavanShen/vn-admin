<template>
    <n-dropdown trigger="hover" :options="options" @select="handelSelect">
        <n-avatar round size="large" />
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