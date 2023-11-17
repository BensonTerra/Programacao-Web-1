<template>
  <div>
    <h1>Weather App</h1>

    <label for="location">Digite o nome da cidade:</label>
    <input type="text" id="location" v-model="city" />
    <button @click="getWeather">Obter Previsão do Tempo</button>

    <div v-if="weatherData">
      <h2>Previsão do Tempo para {{ locationData.country }}</h2>
      <p>Temperatura: {{ currentData.temp_c }}°C</p>
      <p>Condição: {{ currentData.condition.text}}<img :src="currentData.condition.icon"></p>
      <p>Vento a {{ currentData.wind_kph }} kph vindo {{ currentData.wind_dir}}</p>
      <p>Humidade: {{ currentData.humidity}}%</p>
    </div>

    <table>
      <thead>
          <tr>
            <th>Data</th>
            <th>Min</th>
            <th>Max</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="clima in forecastDaysData" :key="clima">
              <td>{{ clima.date }}</td>
              <td>{{ clima.day.mintemp_c }} ºC</td>
              <td>{{ clima.day.maxtemp_c }} ºC</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    // Mudança: Removido o objeto data aninhado
    return {
      city: '',
      weatherData: null,
      locationData: null,
      currentData: null,
      forecastData: null,
      forecastDaysData: null,
    };
  },

  methods: {
    getWeather() {
      const apiKey = '4352c2dfabd9496e80c154100231111';
      const apiUrl = `https://api.weatherapi.com/v1/forecast.json?q=${this.city}&days=3&lang=pt&key=${apiKey}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.weatherData = data
          this.locationData = this.weatherData.location
          this.currentData = this.weatherData.current
          this.forecastData = this.weatherData.forecast
          this.forecastDaysData = this.forecastData.forecastday.filter( e => e.date)
          localStorage.setItem("weatherLocal", JSON.stringify(this.weatherData))
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
      this.weatherData = JSON.parse(storedWeatherData); console.log(this.weatherData)
      this.locationData = this.weatherData.location; console.log(this.locationData)
      this.currentData = this.weatherData.current; console.log(this.currentData)
      this.forecastData = this.weatherData.forecast; console.log(this.forecastData)
      this.forecastDaysData = this.forecastData.forecastday.filter( e => e.date); console.log(this.forecastDaysData)
    }
  }
};
</script>


<style scoped>
  h1 {
    text-align: center;
    color: #333; /* Cor do título principal */
  }

  label {
    display: block;
    margin-top: 20px;
    color: #555; /* Cor do rótulo de entrada */
  }

  input {
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 1px solid #000; /* Adicionando uma borda preta de 1px */
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007BFF; /* Cor de fundo do botão */
    color: #fff; /* Cor do texto do botão */
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3; /* Cor de fundo do botão ao passar o mouse */
  }

  div {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ddd; /* Borda da caixa de resultados */
    border-radius: 5px;
    background-color: #fff; /* Cor de fundo da caixa de resultados */
  }

  h2 {
    color: #007BFF; /* Cor do título secundário */
  }

  p {
    margin: 10px 0;
    color: #333; /* Cor do texto do parágrafo */
  }

  img {
    margin-top: -5px; /* Ajuste para o ícone de condição climática não ficar muito alto */
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc; /* Adiciona uma borda esquerda na tabela */
    border-right: 1px solid #ccc; /* Adiciona uma borda direita na tabela */
    }

    th, td {
    padding: 10px;
    text-align: center; /* Centraliza o texto */
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc; /* Adiciona uma borda esquerda nas células */
    }

    th:last-child, td:last-child {
    border-right: none; /* Remove a borda direita da última coluna */
    }

    thead {
    background-color: #000000;
    color: #ffffff; /* Define a cor do texto no cabeçalho */
    }
</style>

