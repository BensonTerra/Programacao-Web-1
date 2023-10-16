<template>
    <div class="center-container">
      <h1><span>{{ numero }}</span></h1>
      <input @click="addNum()" type="button" value="+">
      <input v-bind:disabled="numero == 0" @click="remNum()" type="button" value="-">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        numero: 0,
      };
    },
    methods: {
      addNum() {
        this.numero += 1;
      },
      remNum() {
        if (this.numero >= 0) {
          this.numero -= 1;
        }
      },
    },
  }
  </script>
  
  <style scoped>
  .center-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Para centralizar verticalmente na altura da janela. */
  }
  </style>
  