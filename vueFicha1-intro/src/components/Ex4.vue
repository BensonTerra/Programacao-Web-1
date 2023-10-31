<template>
    <div>
        <h2>{{productName}}</h2>
        <h2 v-html="productDesc"></h2>
        <h2 v-if=" productPrice <= 1000">productPrice: {{ productPrice }}</h2>
        <h2>productImage: <img src="https://tinyurl.com/2p9dnx68" alt=""></h2>
        <button @click="reset()">Redo</button>
        <div v-if= "productAvailability">
            <button>Disponivel</button>
            <button v-bind:disabled="!productAvailability" @click="comprar()">Comprar</button>
        </div>
        <div v-else>
            <button>Não disponivel</button>
            <button v-bind:disabled="!productAvailability" @click="comprar()">Comprar</button>
        </div>
    </div>
</template>

<script>
export default 
{
    data() 
    {
        return {
            productName: "Dell XPS",
            productDesc: "Processador i7<br>Disco SSD 256GB<br> Monitor Samsung 21",
            productPrice: 1200,
            productAvailability:true
        }
    },
    methods: 
    {
        reset()
        {
            this.productPrice = 1000
        },
        comprar()
        {
            if(this.productAvailability == true)
            {
                alert("Você comprou o PC")
            }
            else
            {
                alert("Computador não disponivel")
            }
        }
    },
}
</script>

<style>

</style>