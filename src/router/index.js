import { createRouter, createWebHistory } from 'vue-router';
import {fixedRoutes} from '@/router/routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: fixedRoutes,
});

export default router;
