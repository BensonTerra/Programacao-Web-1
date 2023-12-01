import { defineStore } from 'pinia'
import * as api from '@/API/api'

const JOKE_API_BASE_URL = 'https://api.chucknorris.io/jokes'
const resources = `random`

export const useJokeStore = defineStore('joke', {
  state: () => ({
    joke: ""
  }),
  getters: {
    getJoke: (state) => (state.joke),
  },
  actions: {
    async fetchJoke()
    {
      try 
      {
        const data = await api.get(JOKE_API_BASE_URL, resources); //console.log(data)
        this.joke = data.value; //console.log(this.joke)
      } 
      catch (error) 
      {
        throw error
      }
    }
  }
})
