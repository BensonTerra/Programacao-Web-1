<script>
  import { useDogStore } from './stores/dog';
  export default {
    data() {
      return {
        dogStore: useDogStore()
      }
    },
    created () 
    {
      try 
      {
        this.dogStore.fetchDogBreeds()
      } 
      catch (error) 
      {
        throw error
      }
    }
}
</script>

<template>

  <h1>MY DOG APP</h1>
  <label for="stlBreeds">BREEDS: </label>
  <select id="sltBreeds">
    <option :value="breed" v-for="breed in dogStore.getBreeds" :key="breed">
      {{ breed }}
    </option>
  </select>

  <p>

  </p>
</template>

<style scoped>

</style>
