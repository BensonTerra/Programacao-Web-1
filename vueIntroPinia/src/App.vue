<script>
import { useCounterStore } from "./stores/counter.js";
export default {
  data() {
    return {
      store: useCounterStore(),
    };
  },
};
</script>

<template>
  <div>

    <button @click="store.increment">CLICA-ME</button>
    <h1>{{ store.getCount }}</h1>
    <h1>{{ store.getDoubleCount }}</h1>
    <h1>{{ store.getDoubleCountPlus }}</h1>


    
    <!--<h2>{{ store.getUserById(2).name }}</h2>-->
  
  </div>
</template>