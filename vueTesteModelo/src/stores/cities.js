import { defineStore } from "pinia";
export const useCityStore = defineStore("city", {
  state: () => ({
    city: null,
    cities: [ 
    { id: 1, name: "cidade1", img: "img1", desc: "desc1" }, 
    { id: 2, name: "cidade2", img: "img2", desc: "desc2" }, 
    { id: 3, name: "cidade3", img: "img3", desc: "desc3" }, 
    ] 
  }),
  getters: {
    getAllcities: (state) => state.cities,

    //getCityByName: (state) => (name) => 
  },

  persist: true,
});