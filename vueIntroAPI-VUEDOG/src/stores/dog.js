import { defineStore } from 'pinia'
import * as API from "../API/api"

const DOG_API_BASE_URL = 'https://dog.ceo/api'

export const useDogStore = defineStore('dog', {
  state: () => ({

    breeds: [],
    dogImage: ""

  }),
  getters: {
    getBreeds: (state) => state.breeds,
    getImage: (state) => state.dogImage
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
    },
    async fetchDogImageByBreed(breed) {      
      try {
        const data = await API.get(DOG_API_BASE_URL,`breed/${breed}/images/random`);
        this.dogImage = data.message;        
      } catch (error) {
        console.error("Error in store fetching dog breeds:", error);
        throw error;
      }
    }
  },
})
