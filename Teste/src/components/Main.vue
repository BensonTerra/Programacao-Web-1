<template>
  <div>
    <h1>Weather App</h1>

    <label for="location">Digite o nome da cidade:</label>
    <input type="text" id="location" v-model="city" />
    <button @click="getWeather">Obter Previsão do Tempo</button>

    <div v-if="weatherData">
      <h2>Previsão do Tempo para {{ weatherData.location.country }}</h2>
      <p>Temperatura: {{ weatherData.current.temp_c }}°C</p>
      <p>Condição: {{ weatherData.current.condition.text}}<img src="//cdn.weatherapi.com/weather/64x64/day/116.png" ></p>
      <p>Vento a {{ weatherData.current.wind_kph }} kph vindo {{ weatherData.current.wind_dir}}</p>
      <p>Umidade: {{ weatherData.current.humidity}}%</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // Mudança: Removido o objeto data aninhado
    return {
      city: '',
      weatherData: null
    };
  },

  methods: {
    getWeather() {
      const apiKey = '4352c2dfabd9496e80c154100231111';
      const apiUrl = `https://api.weatherapi.com/v1/forecast.json?q=${this.city}&days=1&lang=pt&key=${apiKey}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.weatherData = data;
          localStorage.setItem("weatherData", JSON.stringify(this.weatherData));
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  },

  created() {
    // Carregando dados do localStorage quando o componente é criado
    const storedWeatherData = localStorage.getItem("weatherLocal"); //console.log(storedWeatherData)
    if (storedWeatherData) {
      this.weatherData = JSON.parse(storedWeatherData);//console.log(this.weatherData)
    }
  }
};
</script>

<style>
</style>
