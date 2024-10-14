<template>
  <div v-bind:style="{ fontSize: size + 'px' }">
    <p>Ola mundo maravilhoso</p>
  </div>
  <div>
    <button v-bind:disabled="size == 5" @click="changeSize('-')">-</button>
    <button v-bind:disabled="size == 15" @click="changeSize('+')">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 10
    };
  },
  methods: {
    changeSize(dir) {
      if (dir == "+") {this.size+=1}
      else if (dir == "-") {this.size-=1}
    }
  }
};
</script>

<style scoped>

</style>
