<template>
  <div :class="['card', theme]">
    <h2>Titulo do cartão</h2>
    <p>Exemplo de cartão</p>
  </div>
  <br>
  <div>
    <button @click="changeTheme('light')">Light</button>
    <button @click="changeTheme('dark')">Dark</button>
    <button @click="changeTheme('colorful')">Colorful</button>
  </div>


</template>

<script>
export default {
  data() {
    return {
      theme: 'light', // Propriedade de tema inicial como "light"
    };
  },
  methods: {
    changeTheme(newTheme) {
      this.theme = newTheme;
    }
  }
};
</script>

<style scoped> 
.card { 
  width: 300px; 
  padding: 20px; 
  border-radius: 10px; 
  text-align: center; 
  margin-top: 20px; 
  transition: background-color 0.3s ease, color 0.3s ease; 
} 
.card.light { 
  background-color: white; 
  color: black; 
  border: 1px solid #ccc; 
} 
.card.dark { 
  background-color: black; 
  color: white; 
  border: 1px solid #333; 
} 
.card.colorful { 
  background-color: orange; 
  color: blue; 
  border: 1px solid green; 
}
</style>