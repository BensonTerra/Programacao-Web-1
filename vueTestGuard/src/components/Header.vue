<script>
export default {
  data() {
    return {
      user: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null,
    };
  },
  mounted() {
    // Verifica mudanças no localStorage a cada 1 segundo
    this.checkUserInterval = setInterval(() => {
      const loggedUser = localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null;
      if (JSON.stringify(this.user) !== JSON.stringify(loggedUser)) {
        this.user = loggedUser;
      }
    }, 1000);
  },
  beforeDestroy() {
    // Limpa o intervalo quando o componente é destruído
    clearInterval(this.checkUserInterval);
  },
  computed: {
    userLogged() {
      return this.user;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("loggedUser");
      this.user = null; // Atualiza o estado local
      this.$router.push({ name: "home" });
      location.reload(); // Força a atualização da página após o logout
    },
  },
};
</script>

<template>
  <v-app-bar title="Router">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'page' }">Page</RouterLink>
    <span class="pr-3"></span>
    <RouterLink v-if="!userLogged" :to="{ name: 'login' }">Login</RouterLink>
    <span v-else>
      Olá, {{ user.username }}
      <button @click="logout">logout</button>
    </span>
    <span class="pr-3"></span>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>
