<template>
    <n-form ref="nform" :model="formData" :rules="rules">
        <n-form-item label="用户名" path="username">
            <n-input v-model:value="formData.username"></n-input>
        </n-form-item>
        <n-form-item label="密码" path="password">
            <n-input v-model:value="formData.password" type="password" show-password-on="mousedown" ></n-input>
        </n-form-item>
        <n-grid class="btn-group" :cols="1">
            <n-gi>
                <n-button type="primary" @click="login(nform)">登录</n-button>
            </n-gi>
        </n-grid>
    </n-form>
</template>

<script setup>
import { ref } from 'vue';

import rules from '../utils/rules'
import login from '../utils/login'

const formData = ref({
    username: '',
    password: '',
});

const nform= ref(null)
</script>

<style>
.btn-group {
    text-align: center;
}
</style>