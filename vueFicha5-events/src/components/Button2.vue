<template>
    <div v-on:click="showMessage">
        <button v-on:click.once="showMessage">CLICA-ME(Normal)</button>
        <button v-on:keyup.tab="showMessage">CLICA-ME(Tab)</button>
    </div>
</template>

<script>
export default {
    methods: {
        showMessage() {
            alert("Parabens!!! Você Clicou ou apertou Tab")
        }
    },
}
</script>

<style>

</style>