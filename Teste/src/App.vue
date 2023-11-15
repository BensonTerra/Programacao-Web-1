<script setup>
  import mainVue from "./components/Main.vue"
</script>

<template>
  <v-app>
    <v-main class="d-flex align-center justify-center">
      <mainVue></mainVue>

    </v-main>
    <footer style="padding-left: 10px;">Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></footer>
  </v-app>
  
</template>

<style scoped>

</style>
