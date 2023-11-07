<template>
    <div>
        <h1>{{ title }}</h1>
        <h1>{{ author }}</h1>
        <h1>{{ content }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }
    },
}
</script>

<style>

</style>