<template>
    <button @click="show1">SHOW 1</button>
    <button @click="show2(`Programação Web 1`)">SHOW 2</button>
</template>

<script>
export default {
    data() {
        return {
            msg: "Programação Web 1"
        }
    },
    methods: {
        show1() {
            alert(`${this.msg} || Método sem parâmetros`)
            
        },
        show2(customMessage) {
            alert(`${customMessage} || Método com parâmetros`)
            alert(`${ event.type}`)
        }
    },
}
</script>

<style>

</style>