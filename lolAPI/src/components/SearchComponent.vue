<script setup>
import { ref, onMounted} from 'vue';

const val = ref('');
const errors = ref([]);
const champions = ref([]);
const championNames = ref([]);
const searchResult = ref([]);

const fetchData = async () => {
    const response = await fetch(
    'http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion.json'
  );
  const data = await response.json();
  champions.value = Object.entries(data.data).map(([key, value]) => ({
    id: key,
    name: value.name,
    image: `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${value.id}.png`,
    imageLink: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${value.id}_0.jpg`
    // Add other properties here if needed
  }));
  championNames.value = Object.keys(data.data);
};

const searchVal = () => {
  if (val.value === '') {
    errors.value.push('Please enter a champion name');
    return;
  } else {
    errors.value = [];
  }

  const searchValue = val.value.toLowerCase();
  searchResult.value = champions.value.filter((champion) => {
    return champion.name.toLowerCase().includes(searchValue);
  });

  if (searchResult.value.length === 0) {
    errors.value.push('No champion found');
    return;
  }
};
onMounted(() => {
  console.log('Fetching data...');
  fetchData();
});
</script>
<template>
  <div class="m-20">
    <div class="flex items-center">
      <label for="voice-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 21"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
            />
          </svg>
        </div>
        <input
          type="text"
          v-model="val"
          id="voice-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search champions"
          required
        />
        <button
          type="button"
          class="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
            />
          </svg>
        </button>
      </div>
      <button
        type="submit"
        class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="searchVal"
      >
        <svg
          class="w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          /></svg
        >Search
      </button>
    </div>

    <div class="images flex justify-around flex-wrap w-full gap-1 mt-20 text-blacks">
    <template v-if="searchResult.length > 0">
      <figure
        v-for="champion in searchResult"
        :key="champion.id"
        class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
      >
        <a :href="champion.imageLink">
          <img class="rounded-lg" :src="champion.image" />
        </a>
        <figcaption class="absolute px-4 text-lg text-white bottom-6">
          <p>
            {{ champion.name }}
          </p>
        </figcaption>
      </figure>
    </template>
   
  </div>
    <!-- errors -->
    <!-- iterate throw objects  -->
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </div>
</template>
