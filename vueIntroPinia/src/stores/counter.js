import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({    
    counter: 0,
  }),
  getters: {
    getCount: (state) => state.counter,
    getDoubleCount: (state) => state.counter * 2,
    getDoubleCountPlus: (state) => (state.counter * 2) + 1
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    reset() {
      this.counter = 0;
    },
  },
})



