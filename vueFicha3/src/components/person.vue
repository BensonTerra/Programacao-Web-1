<template>
    <div>
        {{ person }}
        {{ printDataPerson() }}
        {{ printDataPersonComputed }}
        {{ getFullNameComputed }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            person:
            {
            firstName: "Rui",
            lastName: "Silva",
            age: 23
            }
        }
    },
    created () {
        console.log("Created");
    },
    mounted () {
        console.log("mounted");
    },
    updated () {
        console.log("Updated");
    },
    methods: {
        printDataPerson() 
        {
            console.log(`Method--> Nome: ${this.person.firstName} e Idade: ${this.person.age}`);
        }
    },
    computed: {
        printDataPersonComputed() {
            console.log(`Method--> Nome: ${this.person.firstName} e Idade: ${this.person.age}`);
            return "A"
        },
        getFullNameComputed(){
        return `${this.person.firstName} ${this.person.lastName}`
        }
    },
    watch: {
        'person.age'(newValue, oldValue) {
            console.log(`Idade altera de ${oldValue} para ${newValue}`);
        }
    },
   
}
</script>

<style>

</style>