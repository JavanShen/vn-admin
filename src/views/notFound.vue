<template>
    <n-empty class="empty" size="huge" description="啊哦, 这个页面找不到了">
        <template #icon>
            <div class="icon">
                <svg-icon icon-class="404"></svg-icon>
            </div>
        </template>
        <template #extra>
            <n-button size="large" @click="backHome"> 回到首页 </n-button>
        </template>
    </n-empty>
</template>

<script setup lang="ts">
import router from '@/router'

const backHome = () => {
    router.push({ path: '/', replace: true })
}
</script>

<style scoped>
.icon {
    height: 250px;
    width: 600px;
}

.empty {
    position: fixed;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.empty :deep(.n-empty__icon) {
    height: auto;
    width: auto;
}
</style>
