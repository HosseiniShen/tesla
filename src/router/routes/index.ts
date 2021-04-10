import type { RouteRecordRaw } from 'vue-router'

const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/Login.vue'),
  meta: {
    title: 'login',
  },
}

export const basicRoutes: RouteRecordRaw[] = [
  LoginRoute
]
