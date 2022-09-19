import { createApp } from 'vue'

import SvgIcon from '@/icon'

import { createPinia } from 'pinia'
import permissionDirective from '@/directive/permission'

import App from './ConfigProvide.vue'
import router from './router'

import './permission'

import 'animate.css'
import '@/styles'

import 'virtual:svg-icons-register'

import '../mock/api'

export const app = createApp(App)
    .use(createPinia())
    .use(router)
    .use(SvgIcon)
    .use(permissionDirective)
    .mount('#app')
