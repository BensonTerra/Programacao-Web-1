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
            <input type="number" min="0" max="10" v-model="movie.score">
        </p>
        <button type="submit">Submit</button>
    </form>

    <div>
        <button @click="addTestMovies">addTeste</button>
    </div>

    <br>
    <p v-if="msgAlert == true">O filme já foi inserido</p>
    <br>
    


    <table>
        <thead>
            <tr>
                <th @click="movies.sort(sortByName)">Name</th>
                <th>Category</th>
                <th @click="movies.sort(sortByScore)">Score</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="movie in movies" :key="movie">
                <td>{{ movie.name }}</td>
                <td>{{ movie.category }}</td>
                <td>{{ movie.score }}</td>
            </tr>
        </tbody>
    </table>

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
            msgAlert: false
        }
    },
    methods: {
        addMovie() {
            //console.log(`${this.movie.name}|${this.movie.category}|${this.movie.score}`)
            
            const newMovie = { ...this.movie };

            if(!this.movies.map(movie => movie.name.toLowerCase()).includes(newMovie.name.toLowerCase()))//se o elemento encontra-se inserido ou não
            {
                this.movies.push(newMovie);//console.table(this.movies)

                this.movie = 
                {
                    name: "",
                    category: "",
                    score: 0
                }
            }
            else
            {
                console.log("Error")
                this.msgAlert = true
                this.movie = 
                {
                    name: "",
                    category: "",
                    score: 0
                }
                setTimeout(() => 
                {
                    this.msgAlert = false
                }, 2500);

            }
            
        
        },
        addTestMovies() {
        const testMovies = 
        [
            { name: "Filme 1", category: "Romance", score: 7.5 },
            { name: "Filme 2", category: "Comedy", score: 8.0 },
            { name: "Filme 3", category: "Terror", score: 6.8 },
            { name: "Filme 4", category: "Mystery", score: 7.2 }
        ];

            for (const testMovie of testMovies) {
            this.movies.push(testMovie);
            }

            //console.table(this.movies);
        },
        sortByName(a,b){
            //console.table(this.movies)
            return a.name.localeCompare(b.name);
        },
        sortByScore(a,b){
            //console.table(this.movies)
            return a.score - b.score;
        },
    },

}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc; /* Adiciona uma borda esquerda na tabela */
  border-right: 1px solid #ccc; /* Adiciona uma borda direita na tabela */
}

th, td {
  padding: 10px;
  text-align: center; /* Centraliza o texto */
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc; /* Adiciona uma borda esquerda nas células */
}

th:last-child, td:last-child {
  border-right: none; /* Remove a borda direita da última coluna */
}

thead {
  background-color: #000000;
  color: #ffffff; /* Define a cor do texto no cabeçalho */
}
</style>