<script>
import { useJokeStore } from './stores/joke';
export default 
{
  data() {
    return {
      jokeStore: useJokeStore()
    }
  },
  created () {
    try 
    {
      setInterval(this.jokeStore.fetchJoke, 5000)
  
    } catch (error) 
    {
      throw error
    };
  },
  computed: {
    joke() {
      return this.jokeStore.getJoke
    }
  },
}
</script>

<template>
  <h1>{{ joke }}</h1>
</template>

<style scoped>

</style>
