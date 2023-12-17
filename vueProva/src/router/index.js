import { createRouter, createWebHistory } from 'vue-router'

import catalogView from '@/views/catalogView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: catalogView
    },
  ]
})

export default router
