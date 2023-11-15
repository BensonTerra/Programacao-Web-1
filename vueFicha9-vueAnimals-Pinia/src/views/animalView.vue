<template>
  <div>
    <h1>{{ animal.name }}</h1>
    <p>
      <img :src="animal.image" alt="">
    </p>
    <p>
      {{ animal.desc }}
    </p>
  </div>
</template>

<script>
import { useAnimalStore } from '@/stores/animal';
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {
      store: useAnimalStore(),
      animal: {}
    }
  },
  created () {
    this.animal = this.store.getAnimal(this.$route.params.id)
  },
}
</script>

<style>

</style>