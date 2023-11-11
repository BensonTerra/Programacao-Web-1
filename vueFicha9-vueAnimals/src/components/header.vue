<template>
    <v-app-bar title="VueAnimals">
        <router-link :to="{name: 'home'}" class="pr-3">Home</router-link>
        <router-link :to="{name: 'about'}" class="pr-3">About</router-link>
        <router-link :to="{name: 'animals'}" class="pr-3">Catalog</router-link>
        <router-link :to="{name: 'login'}" class="pr-3">Login</router-link>
        <button><p>logoff</p></button>
    </v-app-bar>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    data() 
    {
        return {
            users: 
            [
                {username: "Rui", password: "12345"},
                {username: "Maria", password: "54321"},
            ],
            animals:
            [
                {
                    id: 1,
                    name: "macaco",
                    desc: "Termo utilizado para descrever diversos primatas pertencentes à ordem dos primatas.",
                    image: "https://tinyurl.com/w5utf6u5"
                },
                {
                    id: 2,
                    name: "leão",
                    desc: "Mamífero carnívoro pertencente à família dos felinos, conhecido cientificamente como Panthera leo.",
                    image: "https://tinyurl.com/w5utf6u5"
                },
                {
                    id: 3,
                    name: "zebra",
                    desc: "Mamífero herbívoro da família dos equídeos, caracterizado pelas listras distintas e marcantes em seu corpo.",
                    image: "https://tinyurl.com/yvr5shv8"
                },
                {
                    id: 4,
                    name: "golfinho",
                    desc: " O golfinho é um mamífero marinho pertencente à ordem dos cetáceos, especificamente da família Delphinidae. Eles são conhecidos por sua natureza inteligente, habilidades sociais avançadas e pela sua agilidade na água",
                    image: "https://tinyurl.com/mr3u3yje"
                },
            ],
        }
    },
    created() 
    {
        if (localStorage.getItem('Users') == null) 
        {
            localStorage.setItem("Users", JSON.stringify(this.users))
        }
        else
        {
            console.log("Users ja criado")
        }

        if (localStorage.getItem('Animals') == null) 
        {
            localStorage.setItem("Animals", JSON.stringify(this.animals))
        }
        else
        {
            console.log("Animals ja criado")
        }
    },
};
</script>

<style>

</style>