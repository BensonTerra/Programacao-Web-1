<template>
    <div>
        <h1>{{ message }}</h1>
        <counter @resetEvent="reset"></counter>
    </div>
</template>

<script>
import counter from './counter.vue';
export default {
    components: {
        counter,
    },
    data() {
        return {
            message: ""
        }
    },
    methods: {
        reset(value) {
            this.message = `this counter has been reset ${value}`
        }
    },
}
</script>

<style>

</style>