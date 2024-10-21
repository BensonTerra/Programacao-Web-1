<template>
  <div>
    <table>
      <tr>
        <th>Número</th>
        <th>avaliação</th>
      </tr>
      <tr v-for="numero in numerosAleatorios" :key="numero">
        <td>{{ numero }}</td>
        <td v-if="numero >= 0 && numero <= 7 ">Reprovado</td>
        <td v-else-if="numero >7 && numero < 10 ">Oral</td>
        <td v-else-if="numero >= 10 && numero <= 20 ">Aprovado</td>
        <td v-else>Nota invalida</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numerosAleatorios: []
    };
  },
  beforeMount(){
    this.numerosAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * (20 - 0) + 0));
    console.log(this.numerosAleatorios);
  }
}
</script>

<style scoped>
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