import { defineStore } from 'pinia'
import * as API from "@/API/jsonApi"

const JSON_API_BASE_URL = 'https://jsonplaceholder.typicode.com'
const resources = `posts`

export const useJsonStore = defineStore('json', {
  state: () => ({
    jsonData: []
  }),
  getters: {
    getAllData: (state) => (state.jsonData),
  },
  actions: {
    async fetchAllData()
    {
      try
      {
        const data = await API.get(JSON_API_BASE_URL, resources); console.log(data)
        this.jsonData = data
      }
      catch (error) 
      {
        throw error
      }
    },
  },
})
