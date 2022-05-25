<template>
  <router-view/>
</template>

<script setup>
import { useMessage } from 'naive-ui';
import { useLoadingBar } from 'naive-ui'

window.$message=useMessage()
window.$loadingBar=useLoadingBar()
</script>
