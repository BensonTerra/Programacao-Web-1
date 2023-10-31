

import { createApp } from 'vue';
import App from './App.vue';

import './index.css';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter(
{
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/HomePage.vue'),
    },
    {
      path: '/about',
      component: () => import('./views/AboutPage.vue'),
    },
    {
      path: '/contact',
      component: () => import('./views/ContactPage.vue'),
    },
    {
        path: '/prices',
        component: () => import('./views/PricingPage.vue'),
    }
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
