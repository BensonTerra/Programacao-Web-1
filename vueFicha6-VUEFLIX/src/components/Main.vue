<template>
    <form @submit.prevent="addMovie">
        <p>
            <label for="txtname">NAME: </label>
            <input type="text" v-model="movie.name">
        </p>
        <p>
            <label for="txtCategory">CATEGORY: </label>
            <select v-model="movie.category">
                <option value="">Select a category</option>
                <option v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                </option>
            </select>
        </p>
        <p>
            <label for="txtScore">SCORE: </label>
            <input type="number" v-model="movie.score">
        </p>
        <button type="submit">Submit</button>
    </form>
</template>


<script>
export default {
    data() {
        return {
            movie: 
            {
                name:"",
                category: "",
                score: 0
            },
            selected: "",
            categories: ["Romance", "Comedy", "Terror", "mistery"], //Genêros dos filmes
            movies: [], //Array para os filmes inseridos
            

        }
    },
    methods: {
        addMovie() {
            console.clear()
            console.log(`${this.movie.name}||${this.movie.category}||${this.movie.score}`)

        }
    },

}
</script>

<style>

</style>