<template>
    <div>
        <ul v-if="schools.length > 0">
            <h2>{{ schools.length }} Escolas do IPP</h2>
            <li v-for="school in schools" :key="school">
                <span :style="textStyle">{{ school }}</span>
            </li>
        </ul>
        <p v-else>Não há escolas disponiveis</p>
    </div>
    <br/>
</template>

<script>
export default {
    data() {
        return {
            schools: ["ESMAD","ISEP", "ESE", "ISCAP", "ESTG", "ESS", "ESHT"],
        }
    },
    methods: {
        addSchool() {
            this.schools.push("esmad")
        }
    },

}
</script>

<style>

</style>