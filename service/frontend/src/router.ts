import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import("./view/landing-page/index.vue")
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
