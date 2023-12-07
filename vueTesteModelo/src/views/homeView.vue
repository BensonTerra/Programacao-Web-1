<template>
  <v-container>
    <v-row>
      <v-col v-for="city in cities" :key="city.id" cols="4">

        <v-card class="mx-auto" max-width="1400">
          <v-img
            class="align-end text-white"
            height="200"
            :src="city.img"
            cover
          >
            <v-card-title>{{ city.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"> animal </v-card-subtitle>

          <v-card-text>
            <div>{{ city.desc }}</div>
          </v-card-text>

          <v-card-actions>

          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import { useCityStore } from "@/stores/cities"
import { useUserStore } from "@/stores/user";
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      cityStore: useCityStore(),
      userStore: useUserStore()
    }
  },
  computed: {
    cities() {
      return this.cityStore.getAllcities 
    }
  },

}
</script>