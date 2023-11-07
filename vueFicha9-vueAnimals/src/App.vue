<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerVue from './components/header.vue'
</script>

<template>
  <v-app>
    <headerVue>
      <v-main class="d-flex align-center justify-center">
        <router-view/>
      </v-main>
    </headerVue>
  </v-app>

  <RouterView />
</template>

<style scoped>

</style>
