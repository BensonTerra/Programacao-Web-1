<script>
  import { useCounterStore} from "@/stores/counter"
  export default {
    data() {
      return {
        store: useCounterStore()
      }
    },
  }
</script>

<template>
  <div>
    <button @click="store.increment()">Click Me</button>
    <h1>{{ store.count }}</h1>
    <h1>{{ store.doubleCount }}</h1>
  </div>
</template>

<style scoped>

</style>
