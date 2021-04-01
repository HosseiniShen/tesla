import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { scrollBehavior } from './scrollBehavior'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
  strict: true, // 不允许在路由后面加 / 
  scrollBehavior,
})

export function setupRouter (app: App<Element>) {
  app.use(router)
}

export default router
