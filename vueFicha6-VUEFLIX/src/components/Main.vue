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

    <div>
        <p v-if="msgAlert == true">O filme já foi inserido</p>
    </div>
    
    <p>Tabela 1</p>
    <p>
        <label for="txtFilterName">Filter by name: </label>
        <input type="text" id="txtFilterName" v-model="filterName">
        <table>
            <thead>
                <tr>
                    <th @click="movies1.sort(sortByName)">Name</th>
                    <th>Category</th>
                    <th @click="movies1.sort(sortByScore)">Score</th>
                    <th>Functions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="movie in filteredMovies" :key="movie">
                    <td>{{ movie.name }}</td>
                    <td>{{ movie.category }}</td>
                    <td>{{ movie.score }}</td>
                    <td><button @click="removeSerie(movie.name)">REMOVE</button></td>
                </tr>
            </tbody>
        </table>
    </p>

    <p>Tabela 2</p>
    <p>
        <table>
            <thead>
                <tr>
                    <th @click="movies2.sort(sortByName)">Name</th>
                    <th>Category</th>
                    <th @click="movies2.sort(sortByScore)">Score</th>
                    <th>Functions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="movie in movies2" :key="movie">
                    <td>{{ movie.name }}</td>
                    <td>{{ movie.category }}</td>
                    <td>{{ movie.score }}</td>
                    <td><button @click="removeSerie(movie.name)">REMOVE</button></td>
                </tr>
            </tbody>
        </table>
    </p>

</template>

<script>
export default 
{
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
            movies1: [], //Array para os filmes inseridos
            movies2: [], //Array para os filmes inseridos
            msgAlert: false,
            filterName: ""
        }
    },
    methods: {
        addMovie() {
            //console.log(`${this.movie.name}|${this.movie.category}|${this.movie.score}`)
            
            const newMovie = { ...this.movie };

            //if(!this.movies.map(movie => movie.name.toLowerCase()).includes(newMovie.name.toLowerCase())) //se o elemento encontra-se inserido ou não
            if(!this.movies1.some( movie => movie.name.toLowerCase() == newMovie.name.toLowerCase()))
            {
                this.movies1.push(newMovie);//console.table(this.movies)

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
            this.movies1.sort(this.sortByScore)
        
        },
        addTestMovies() {
        const testMovies = 
        [
            { name: "Filme 1", category: "Romance", score: 7.5 },
            { name: "Filme 2", category: "Comedy", score: 8.0 },
            { name: "Filme 3", category: "Terror", score: 6.8 },
            { name: "Filme 4", category: "Mystery", score: 7.2 }
        ];

            for (const testMovie of testMovies) 
            {
                //this.movies1.push(testMovie);
                this.movies2.push(testMovie);
            }

            //console.table(this.movies);
        },
        sortByName(a,b){
            //console.table(this.movies2)
            return a.name.localeCompare(b.name);
        },
        sortByScore(a,b){
            //console.table(this.movies2)
            return b.score - a.score;
        },
        removeSerie(name) {
            if(confirm(`Are you sure you want to remove ${ name }?`))
            {
                this.movies1 = this.movies1.filter( movie => movie.name != name)
            }

        },
        saveMovies() {
            localStorage.movies = JSON.stringify(this.movies1)
        }
    },
    computed: {
        filteredMovies() {
            return this.movies1.sort(this.sortByScore).filter( movie => movie.name.toLowerCase().includes(this.filterName)) 
        }
    },
    created () {
        window.addEventListener("beforeunload", this.saveMovies);
        this.movies1 = localStorage.movies ? JSON.parse(localStorage.movies) : []
    }
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