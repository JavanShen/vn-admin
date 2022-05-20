<template>
    <Background :src="bg" />
    <div class="container">
        <div class="decoration" :style="{backgroundImage:'url('+decoration+')'}"></div>
        <div class="login-form">
            <LoginForm class="form" />
        </div>
    </div>
</template>

<script setup>
import LoginForm from './components/LoginForm.vue'
import Background from '@/components/Background.vue';
import bg from '@/assets/login/bg.jpg'
import decoration from '@/assets/login/decoration.jpg'
</script>

<style scoped>
.container {
    width: 800px;
    height: 500px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: rgb(252, 252, 252);
    border-radius: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    overflow: hidden;
}

.decoration {
    flex: 0.4;
    height: 100%;
    background-size: cover;
}

.login-form {
    flex: 0.6;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.form{
    width: 80%;
}
</style>