import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/AboutView.vue'
import animals from '../views/animalListView.vue'
import animal from '../views/animalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: aboutView
    },
    {
      path: '/animals',
      name: 'animals',
      component: animals
    },
    {
      path: '/animal',
      name: 'animal',
      component: animal
    }
  ]
})

export default router
