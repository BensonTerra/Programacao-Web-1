<template>
    <v-app-bar title="VueAnimals">
        <router-link :to="{name: 'home'}" class="pr-3">Home</router-link>
        <router-link :to="{name: 'about'}" class="pr-3">About</router-link>
        <router-link :to="{name: 'animals'}" class="pr-3">Catalog</router-link>
        <router-link :to="{name: 'animal'}" class="pr-3">Login</router-link>
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
                {username: "Rui", password: 12345},
                {username: "Maria", password: 54321},
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
    }

}
</script>

<style>

</style>