import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Notfund from '@/layout/404.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/index.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notfund',
    component: Notfund
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
