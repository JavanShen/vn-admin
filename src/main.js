import { createApp } from 'vue';
import App from './ConfigProvide.vue';
import router from './router';
import { createPinia } from 'pinia';

import './permission'
import permissionDirective from '@/directive/permission';

import 'animate.css'
import '@/styles'

import SvgIcon from '@/icon'
import 'virtual:svg-icons-register'

import '../mock/api';

export const app = createApp(App)
.use(createPinia())
.use(router)
.use(SvgIcon)
.use(permissionDirective)
.mount('#app');
