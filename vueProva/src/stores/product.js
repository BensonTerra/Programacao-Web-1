import { defineStore } from 'pinia'
import * as api from "../API/api";

const FAKE_STORE_BASE_URL = 'https://fakestore.iotechpis.com'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: []
  }),
  getters: {
    getProducts: (state) => state.products
  },
  actions: {
    async fetchProducts() {
      try {
        const data = await api.get(FAKE_STORE_BASE_URL, 'products');
        this.products = data; //console.log(this.products)
      } 
      catch (error) {
        throw error
      }
    }
  }
})