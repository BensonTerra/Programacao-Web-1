<script setup>
  var filhos = [
    {
      filho: "Filho 1",
      neto: [
        {
          neto: "Neto 1",
        },
        {
          neto: "Neto 2",
        }
      ]
    },
    {
      filho: "Filho 2"
    },
    {
      filho: "Filho 3"
    },
    {
      filho: "Filho 4"
    }
  ]
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Filho</th>
        <th>Neto</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="filho in filhos" :key="filho.filho">
        <td>
          <h1>{{ filho.filho }}</h1>
        </td>
        <td>
          <div v-if="filho.neto">
            <ul>
              <li v-for="neto in filho.neto" :key="neto.neto">
                <h2>{{ neto.neto }}</h2>
              </li>
            </ul>
          </div>
          <div v-else>
            <h2>Não tem neto</h2>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ff0000;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f4f4f4;
  font-weight: bold;
  color: red;
}

h1, h2 {
  margin: 0;
  font-size: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>

