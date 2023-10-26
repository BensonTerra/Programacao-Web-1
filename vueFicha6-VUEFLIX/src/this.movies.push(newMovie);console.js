            this.movies.push(newMovie);console.table(this.movies)

            this.movie = 
            {
                name: "",
                category: "",
                score: 0
            }

            console.table(this.movies.map(movie => movie.name.toLowerCase()).includes(newMovie.name.toLowerCase()))
