<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="icon"></use>
    </svg>
</template>

<script setup>
import {computed} from 'vue'

defineProps({
    iconClass: {
        type: String,
        required: true
    }
})

const icon = computed(() => `#icon-${this.iconClass}`)
</script>

<style scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>