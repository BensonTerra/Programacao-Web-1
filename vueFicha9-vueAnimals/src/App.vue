<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerVue from './components/header.vue'
</script>

<template>
  <v-app >
    <headerVue/>
      <v-main class="d-flex align-center justify-center">
        <RouterView />
      </v-main>

  </v-app>


</template>

<style scoped>

</style>
