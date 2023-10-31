import { createRouter, createWebHistory } from 'vue-router';
import index from './pages/index.vue'
import success from "./pages/success.vue"

const routes = [
    { path: '/', component: index },
    { path: '/success', component: success },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;