<template>
  
</template>

<script>
export default {
    methods: {
        init() {
            window.onload( () => 
            {
                localStorage.setItem('user', "teste")
            })
        }
    },
}
</script>

<style>

</style>