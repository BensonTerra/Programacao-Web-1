<script setup>
import { ref, onMounted } from 'vue';

const champions = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch(
      'http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion.json'
    );

    const data = await response.json();
    const championData = data.data;
    const championArray = Object.values(championData);
    champions.value = championArray.map((champion) => ({
      id: champion.id,
      name: champion.name,
      image: `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${champion.image.full}`,
      imageLink: `https://example.com/${champion.id}` // Replace this with the appropriate link for each champion
    }));
    console.log(champions.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
    console.log('Fetching data...');
  fetchData();
});
</script>
<template>
  <div class="m-20 w-3/4">
    <div class="info">
      <h1 class="font-bold text-4xl text-blue-800 mb-8">About</h1>
      <p class="font-semibold">
        Testing is a Vue.js app that uses the Vite build tool. It is a simple
        app that demonstrates champions of the League of Legends game. It uses
        the <a href="https://developer.riotgames.com/">Riot Games API</a> to
        fetch data.
      </p>
    </div>
</div>
    <div class="champions m-20">
      <h1 class="font-bold text-3xl text-blue-800 mb-8">Champions</h1>
      <div class="images flex justify-around flex-wrap w-full gap-1">
        <figure
        v-for="champion in champions" :key="champion.id"
          class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
        >
          <a :href="champion.imageLink">
            <img
              class="rounded-lg"
              :src="champion.image"
            />
          </a>
          <figcaption class="absolute px-4 text-lg text-white bottom-6">
            <p>
              {{ champion.name  }}
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  
</template>
