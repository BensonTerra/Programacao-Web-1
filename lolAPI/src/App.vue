<script setup>
import Navigation from './components/Navigation.vue';
import HomePage from './views/HomePage.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div>
    <Navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>
/* Your component-specific styles go here */
</style>
