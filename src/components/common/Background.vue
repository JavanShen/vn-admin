<template>
    <div class="bg" :style="{ backgroundImage: 'url(' + src + ')' }"></div>
</template>

<script setup lang="ts">
interface Props {
    src: string
}

withDefaults(defineProps<Props>(), {
    src: ''
})
</script>

<style scoped>
.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    transform: scale(1.1);
    z-index: -1;
}
</style>
