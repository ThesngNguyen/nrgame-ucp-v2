import { createRouter, createWebHistory } from 'vue-router'
declare global {
  interface ImportMetaEnv {
    readonly BASE_URL: string
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || undefined),
  routes: [],
})

export default router
