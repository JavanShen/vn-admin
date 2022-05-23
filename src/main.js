import { createApp } from 'vue';
import App from './ConfigProvide.vue';
import router from './router';
import { createPinia } from 'pinia';

import './permission'

import 'animate.css'
import '@/styles'
import SvgIcon from '@/SvgIcon'
import '../mock/api';

export const app=createApp(App).use(createPinia()).use(router).use(SvgIcon).mount('#app');
