<template>
    <p v-show="showText" :style="textStyle">{{ msg }}</p>
    <div>
        <button @click="textStyle.color = 'red'">RED</button>
        <button @click="textStyle.fontSize = '26px'">BIG</button>
        <button @click="textStyle.backgroundColor = 'yellow'">YELLOW</button>
        <button @click="showText = !showText">SHOW/HIDE</button>
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
        }
    },
    
}
</script>

<style>

</style>