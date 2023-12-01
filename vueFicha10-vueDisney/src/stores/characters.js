import { defineStore } from 'pinia';
import * as api from "../API/api";

const CHARACTERS_API_BASE_URL = 'https://api.disneyapi.dev/character'

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: []
  }),
  getters: {
    getCharacters: (state) => state.characters,
    getCharacterId: (state) => (id) => state.characters.find( (character) => character._id == id),  
  },
  actions: {
    async fetchCharacters() 
    {
      try 
      {
        const charactersData = await api.get(CHARACTERS_API_BASE_URL); //console.log(charactersData)
        this.characters = Object.values(charactersData.data)
      } 
      catch (error) 
      {
        throw error;
      }
    }
  },

  persist:true,
})
