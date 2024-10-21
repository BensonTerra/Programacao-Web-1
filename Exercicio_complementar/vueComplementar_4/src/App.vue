<script setup>
import cRender from "./components/conditionalRender.vue";
</script>

<template>
  <div class="card-grid">
    <cRender nome="placeName" idade="24" localidade="placeLocalidade" />
    <cRender nome="placeName" idade="24" localidade="placeLocalidade" />
    <cRender nome="placeName" idade="24" localidade="placeLocalidade" />
  </div>
</template>

<style scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Espaçamento entre os cards */
  justify-content: center; /* Centralizar os cards horizontalmente */
}

.card-grid > * {
  flex: 1 1 calc(33.333% - 40px); /* Cards em 3 colunas, ajusta com o gap */
  max-width: 300px; /* Limita a largura máxima de cada card */
  box-sizing: border-box; /* Garante que padding e bordas sejam incluídos na largura total */
}

@media (max-width: 900px) {
  .card-grid > * {
    flex: 1 1 calc(50% - 40px); /* Em telas menores, exibe 2 cards por linha */
  }
}

@media (max-width: 600px) {
  .card-grid > * {
    flex: 1 1 100%; /* Em telas muito pequenas, exibe 1 card por linha */
  }
}
</style>
