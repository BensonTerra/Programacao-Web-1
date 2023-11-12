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
          localStorage.setItem("weatherLocal", JSON.stringify(this.weatherData));
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
</style>

