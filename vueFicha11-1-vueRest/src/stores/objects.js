import { defineStore, mapActions } from 'pinia'
import * as api from '../API/api.js'

const OBJECTS_API_BASE_URL = "https://api.restful-api.dev"
const RESOURCE = "objects"

export const useObjectsStore = defineStore('objects', {
  state: () => ({
    objects: []
  }),
  getters: {
    getAllObjects: (state) => state.objects
  },
  actions: {
    async fetchAllObjects()
    {
      const data = await api.get(OBJECTS_API_BASE_URL,RESOURCE); console.log(data)
      this.objects = data
    }
  }
  
})
