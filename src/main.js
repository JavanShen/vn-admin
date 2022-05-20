import { createApp } from 'vue';
import App from './ConfigProvide.vue';
import router from './router';
import '@/styles'

createApp(App).use(router).mount('#app');
