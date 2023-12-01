<script>
  import { useObjectsStore } from '../stores/objects'

  export default
  {
    data() {
      return {
        objectStore: useObjectsStore()
      }
    },
    created () {
      try 
      {
        console.log("Created")
        //this.objectStore.getAllObjects
      } 
      catch (error) 
      {
        
      }
    }
  }


</script>


<template>
  <main>
    <!--
    <table>
    <tr>
      <th>userId</th>
      <th>id</th>
      <th>title</th>
      <th>body</th>
    </tr>
    <tr v-for="data in " :key="data">
      <th></th>
    </tr>
  </table>
    -->
  </main>
</template>
