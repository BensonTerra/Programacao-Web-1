<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="1400">
          <v-img
            class="align-end text-white"
            height="200"
            :src="character.imageUrl"
            cover
          >
            <v-card-title>{{ character.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"> 
            <p>Numero de filmes: {{ character.films.length }}</p>
            <p>Numero de curtas: {{ character.shortFilms.length }}</p>
            <p>Numero de programas: {{ character.tvShows.length }}</p>
            <p>Numero de jogos: {{ character.videoGames.length }}</p>
          </v-card-subtitle>
          

          <v-card-text>
            <div></div>
          </v-card-text>

          <v-card-actions class="d-flex align-center justify-center">
            <p><v-btn @click="$router.go(-1)">Voltar</v-btn></p>
            <p><a :href="character.wikiPage" target="_blank">Ver na Disney Wiki</a></p>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { useCharactersStore } from "@/stores/characters"
  import { RouterLink } from "vue-router";
  export default { 
    data() {
      return {
        store: useCharactersStore(),
        character: null,
        wikiPage: null
      }
    },
    created () {
      this.character = this.store.getCharacterId(this.$route.params.id); //console.log(this.character)
      if (this.character) {
        this.character.wikiPage = `https://disney.fandom.com/wiki/${this.character.name.replace(/\s/g, "_")}`;
      }
    },
  }
</script>
