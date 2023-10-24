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
            console.log(`${this.movie.name}||${this.movie.category}||${this.movie.score}`)
            
            const newMovie = { ...this.movie };

            this.movies.push(newMovie);console.table(this.movies)

            this.movie = {
            name: "",
            category: "",
            score: 0
            }
            
           this.addTestMovies()
        },
        addTestMovies() {
        const testMovies = [
            { name: "Filme 1", category: "Romance", score: 7.5 },
            { name: "Filme 2", category: "Comedy", score: 8.0 },
            { name: "Filme 3", category: "Terror", score: 6.8 },
            { name: "Filme 4", category: "Mystery", score: 7.2 }
            ];

            for (const testMovie of testMovies) {
            this.movies.push(testMovie);
            }

            console.table(this.movies);
        },
        mounted () {
            this.addTestMovies();
        },
    },

}
</script>

<style>

</style>