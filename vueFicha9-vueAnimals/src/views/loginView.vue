<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="login">
      <v-text-field
        v-model="firstName"
        label="First name"
        :rules="firstNameRules"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        label="Last name"
        :rules="lastNameRules"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
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
            const user = JSON.parse(localStorage.Users).
            find( user =>
            {
                user.username =  
            })
        }
    },

}
</script>

<style>

</style>