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
        msg = "ola " + msg
        return msg
      }

    },
    isUser() {
      return this.store.isUser
    },
  },
  methods: {
    logut() {
      this.store.logout();
      this.$router.push({ name: "home" });
    }
  },
}
</script>

<template>
  <v-app-bar :title="name">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
  </v-app-bar>
</template>

  