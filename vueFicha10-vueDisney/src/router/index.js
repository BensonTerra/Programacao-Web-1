import { createRouter, createWebHistory } from 'vue-router'
import catalogView from '../views/catalogView.vue'
import characterView from '../views/characterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: catalogView
    },
    {
      path: '/character/:id',
      name: 'character',
      component: characterView
    },
  ]
})

export default router
