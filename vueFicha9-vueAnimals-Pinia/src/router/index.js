import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/AboutView.vue'
import loginView from '../views/loginView.vue'
import animalListView from '../views/animalListView.vue'
import animalView from '../views/animalView.vue'
import addAnimalView from '../views/addAnimalView.vue'
import pageNotFoundView from '../views/pageNotFoundView.vue'
import { useUserStore } from "@/stores/user"

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
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/animals',
      name: 'animals',
      component: animalListView
    },
    {
      path: '/animals/:id',
      name: 'animal',
      component: animalView,
      meta: { requiresAuth: true }
    },
    {
      path: '/addanimal',
      name: 'addAnimal',
      component: addAnimalView,
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pagenotfound',
      component: pageNotFoundView
    }
  ]
})
/**/
router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !useUserStore().isUser) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
});


export default router
