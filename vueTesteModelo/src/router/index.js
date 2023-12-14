import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/loginView.vue'
import HomeUser from '../views/HomeView.vue'

import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user',
      name: 'user',
      component: HomeUser,
      meta: {requiresAuth: true}
    },
  ]
})


router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !useUserStore().isUser) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
});


export default router
