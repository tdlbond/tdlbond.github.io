import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Notfund from '@/layout/404.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
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
