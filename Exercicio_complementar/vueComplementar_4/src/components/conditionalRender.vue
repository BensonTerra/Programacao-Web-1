<template>
  <div class="card">
    <h1>{{ nome }}</h1>
    <p v-if="!showData">Idade: {{ idade }}</p>
    <p v-if="!showData">Localidade: {{ localidade }}</p>
    <div>
      <button v-if="showData" @click="toggleData()" type="button">Mostrar</button>
      <button v-else @click="toggleData()" type="button">Ocultar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    idade: {
      type: Number,
      required: true,
    },
    localidade: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      showData: true, // Cada instância do card terá seu próprio showData
    };
  },
  methods: {
    toggleData() {
      this.showData = !this.showData;
    }
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  color: #555;
}
</style>
