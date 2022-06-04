<template>
    <Background :src="bg" />
    <div class="container">
        <div class="decoration" :style="{ backgroundImage: 'url(' + decoration + ')' }"></div>
        <div class="login-form">
            <LoginForm class="form" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useConfigStore } from '@/store';
import LoginForm from './components/LoginForm.vue'
import bg from '@/assets/login/bg.jpg'
import decoration from '@/assets/login/decoration.jpg'

const store = useConfigStore()

const containerBackColor = ref(store.theme?.name === 'dark' ? '#18181c' : '#fcfcfc')
const brightness = ref(store.theme?.name === 'dark' ? 0.6 : 1)
</script>

<style scoped>
.container {
    width: 800px;
    height: 500px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: v-bind(containerBackColor);
    border-radius: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    overflow: hidden;
}

.decoration {
    flex: 0.4;
    height: 100%;
    background-size: cover;
    filter: brightness(v-bind(brightness));
}

.login-form {
    flex: 0.6;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.form {
    width: 80%;
}
</style>