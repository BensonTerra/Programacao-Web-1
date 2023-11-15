<template>

  <v-card class="mx-auto" >

    <v-container fluid>
      <v-row dense>
        <v-col v-for="animal in animals" :key="animal" :cols="4">
          <v-card class="mx-auto px-5" col = "4">
            <v-img
              :src="animal.image"
              height="200px"
              cover
            ></v-img>

            <v-card-title>{{ animal.name }}</v-card-title>

            <v-card-actions>
              <router-link :to="{name:'animal', params:{id:animal.id}}" tag="v-btn">
                Explore
              </router-link>
              <v-card-text>{{ animal.desc }}</v-card-text>
            </v-card-actions>

            <v-expand-transition>

            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </v-card>



</template>

<script>
  import { useAnimalStore } from '@/stores/animal';
  import { RouterLink } from 'vue-router'
  export default {
    data()
    {
      return {
        store: useAnimalStore(),
        animals: [],
      }
    },
    created () {
      this.animals = this.store.getAnimals;console.log(this.animals)
    },
  }
</script>


<style>

</style>