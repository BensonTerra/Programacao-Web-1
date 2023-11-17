<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="login">
      <v-text-field v-model="username" label="Username"></v-text-field>

      <v-text-field v-model="password" label="Password"></v-text-field>

      <v-btn type="submit" block class="mt-2">Login</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        login() {
            this.user = JSON.parse(localStorage.Users)
            this.user = this.user.find( user => user.username.toLowerCase() == this.username.toLowerCase() && user.password == this.password)
            console.table(this.user)

            /*
            if (this.user)
            {
              localStorage.LoggedUser = JSON.stringify(this.user)
              //this.$router.push({name: "animals"})
              
            }
            else
            {
              alert("invalid user")
            }
            */
        }
    },


}
</script>

<style>

</style>