<script setup>
  defineProps ({
    productData: {
      type: Object,
      required: true,
    }
  })
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>title</th>
        <th>image</th>
        <th>price</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ productData.id }}</td>
        <td>{{ productData.title }}</td>
        <td>product.image</td>
        <td>{{ productData.price }}</td>
        <td>{{ productData.description }}</td>
      </tr>
    </tbody>
  </table>
  <br>
</template>

<style>

</style>