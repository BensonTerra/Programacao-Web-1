<script setup>
    new Vue({
      el: '#app',
      data: {
        city: '',
        weatherData: null
      },
      methods: {
        getWeather() {
          const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`;

          fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              this.weatherData = data;
            })
            .catch(error => {
              console.error('Error fetching weather data:', error);
            });
        }
      }
    });

</script>

<template>
  <div id="app">
    <h1>Weather App</h1>
    
    <label for="location">Digite o nome da cidade:</label>
    <input type="text" id="location" v-model="city" />
    <button @click="getWeather">Obter Previsão do Tempo</button>
    
    <div v-if="weatherData">
      <h2>Previsão do Tempo para {{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
      <p>Temperatura: {{ weatherData.main.temp }}°C</p>
      <p>Condição: {{ weatherData.weather[0].description }}</p>
      <p>Umidade: {{ weatherData.main.humidity }}%</p>
    </div>
  </div>
</template>

<style scoped>

</style>
