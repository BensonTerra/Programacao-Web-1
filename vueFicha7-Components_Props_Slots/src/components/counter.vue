<template>
    <h1>{{ counter }}</h1>
    <button @click="counterPlus">INCREMENT</button>
    <button @click="counterReset">RESET</button>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        counterPlus() {
            this.counter += 1
        },
        counterReset() {
            this.counter = 0
            this.$emit('resetEvent', this.counter)
        }
    },

}
</script>

<style>

</style>