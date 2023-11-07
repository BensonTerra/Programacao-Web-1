<template>
    <div>
        <h1>Blogposts</h1>
        <br>
        <cardPost title="myTitle1" author="myAuthor1" content="myContent1"/>
        <br>
        <cardPost title="myTitle2" author="myAuthor2" content="myContent2"/>
    </div>
</template>

<script>
import cardPost from './cardPost.vue';
export default {
    components: {
        cardPost,
    },
}
</script>

<style>

</style>