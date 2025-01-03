import { createRouter, createWebHistory } from 'vue-router'
import loginView from '../views/loginView.vue'

import { useUserStore } from "@/stores/user";
import HomeView from '../views/HomeView.vue';
import deviceView from '@/views/deviceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {requiresAuth: true}
    },
    {
      path: "/home/:id",
      name: "device",
      component: deviceView,
      meta: { requiresAuth: true },
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
