<template>
  <nav>
    <input type="text" >
  </nav>
  <br>

  <div v-for="product in products" :key="product.id">
    <productInfo :productData="product"></productInfo>
  </div>

</template>

<script setup>
  import productInfo from "../components/product.vue"
</script>

<script>
import { useProductStore } from '@/stores/product';

export default {
  data() {
    return {
      productStore: useProductStore(),
      
    }
  },
  created () {
    try {
      this.productStore.fetchProducts()
    } 
    catch (error) {
      throw error
    };
  },
}
</script>

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