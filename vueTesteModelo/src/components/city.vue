<template>
  <v-card class="mx-auto" max-width="1400">
    <v-img
      class="align-end text-white"
      height="200"
      :src="city.img"
      cover
    >
      <v-card-title>{{ city.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"></v-card-subtitle>

    <v-card-text>
      <div>{{ city.desc }}</div>
    </v-card-text>

    <v-card-actions>

    </v-card-actions>

  </v-card>
</template>

<script>
import { useCityStore } from '@/stores/cities'

export default {
  name: 'city',
  data() {
    return {
      cityStore: useCityStore()
    }
  },
  props: {
    name: {
      type: string,
    },
  },
  computed: {
    name() {
      return this.data 
    }
  },
}
</script>

<style>

</style>