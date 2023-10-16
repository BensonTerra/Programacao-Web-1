<script setup>
    import Ex1 from './components/Ex1.vue'
    import Ex2 from './components/Ex2.vue'
    import Ex3 from './components/Ex3.vue'
    import Ex4 from './components/Ex4.vue'
</script>

<template>
    <header>
        <div class="wrapper">
            <div>
                <Ex1 class="Ex"/>
                <Ex2 class="Ex"/>
                <Ex3 class="Ex"/>
                <Ex4 class="Ex"/>
            </div>
        </div>
    </header>
</template>

<style scoped>
.Ex {
  margin: 10px;
  color: black;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border-radius:50%;
}
</style>
