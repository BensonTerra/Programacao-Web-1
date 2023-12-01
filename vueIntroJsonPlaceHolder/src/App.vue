<script>
import { useJsonStore } from './stores/jsonStore.js'

export default
{
  data() {
    return {
      jsonStore: useJsonStore()
    }
  },
  created () {
    try 
    {
      this.jsonStore.fetchAllData()
    } 
    catch (error) 
    {
      throw error
    };
  },
}
</script>

<template>
  <h1>jsonPlaceHolder example</h1>

  <!--Tentar fazer metodo post com FORM-->

  <table>
    <tr>
      <th>userId</th>
      <th>id</th>
      <th>title</th>
      <th>body</th>
    </tr>
    <tr v-for="data in jsonStore.getAllData" :key="data">
      <th>{{ data.userId }}</th>
      <th>{{ data.id }}</th>
      <th>{{ data.title }}</th>
      <th>{{ data.body }}</th>
    </tr>
  </table>
</template>

<style>
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
