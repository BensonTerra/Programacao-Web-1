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
export default {
  data() {
    return {
      animal: {}
    }
  },
  created () {
    this.animal = JSON.parse(localStorage.Animals)
  },
}
</script>

<style>

</style>