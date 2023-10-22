<template>
    <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="team in teams" :key="team">
                    <td>{{ teams.indexOf(team) }}</td>
                    <td>{{ team.name }}</td>
                    <td>{{ team.year }}</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
export default {
    data() {
        return {
            teams: 
            [
                {name: "benfica", year: 1910},
                {name: "porto", year: 1912},
                {name: "sporting", year: 1914}
            ]
        }
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



