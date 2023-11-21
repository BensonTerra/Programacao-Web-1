import { defineStore } from 'pinia'

import * as API from "../API/api"

const DOG_API_BASE_URL = 'https://dog.ceo/api'

export const useDogStore = defineStore('dog', {
  state: () => ({

    breeds: []

  }),
  getters: {
    getBreeds: (state) => state.breeds
  },
  actions: {
    async fetchDogBreeds() 
    {
      try 
      {
        const data = await API.get(DOG_API_BASE_URL, 'breeds/list/all');console.log(data)
        this.breeds = Object.keys(data.message)
      } 
      catch (error) 
      {
        throw error
      }
    }
  },
})
