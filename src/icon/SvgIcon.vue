<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="icon"></use>
    </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    iconClass: {
        type: String,
        required: true
    }
})

const icon = computed(() => `#icon-${props.iconClass}`)
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
