<template>
    <p v-show="showText" :style="textStyle">{{ msg }}</p>
    <div>
        <button @click="textStyle.color = 'red'">RED</button>
        <button @click="textStyle.fontSize = '26px'">BIG</button>
        <button @click="textStyle.backgroundColor = 'yellow'">YELLOW</button>
        <button @click="showText = !showText">SHOW/HIDE</button>
    </div>
    <br/>
    <div>
        <ul v-if="schools.length > 0">
            <li v-for="school in schools" :key="school">
                <span :style="textStyle">{{ school }}</span>
            </li>
        </ul>
        <p v-else>Não há escolas disponiveis</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "A ESMAD é uma escola do IPP",
            textStyle: 
            {
                color: "white",
                fontSize: "16px",
                backgroundColor: "none",
                display: "block"
            },
            showText: true,
            //Parte 2 da ficha
            schools: ["ESMAD","ISEP", "ESE", "ISCAP", "ESTG", "ESS", "ESHT"],
        }
    },

}
</script>

<style>

</style>