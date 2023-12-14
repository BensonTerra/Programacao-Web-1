<script>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";
export default {
  data() {
    return {
      store: useUserStore()
    }
  },
  computed: {
    name() {
      let msg = this.store.getUser?.username
      if(!msg)
      {
        msg = "ola user"
        return msg
      }
      else
      {
        msg = "ola "+ msg
        return msg
      }

    },
    isUser() {
      return this.store.isUser
    },
  },
  methods: {
    logout() {
      this.store.logout();
      this.$router.push({ name: "home" });
    }
  },
}
</script>

<template>
  <v-app-bar :title="name">
    <v-btn v-if="isUser" @click="logout" class="mr-5">Logout</v-btn>
    <v-btn v-else><RouterLink :to="{ name: 'home' }" class="mr-5 text-none">Home</RouterLink></v-btn>
  </v-app-bar>
</template>

  