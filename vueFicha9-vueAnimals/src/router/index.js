import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/AboutView.vue'
import animals from '../views/animalListView.vue'
import loginView from '../views/loginView.vue'
import animal from '../views/animalView.vue'
import pageNotFoundView from '../views/pageNotFoundView.vue'

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
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/animal',
      name: 'animal',
      component: animal
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pagenotfound',
      component: pageNotFoundView
    }
  ]
})

export default router
