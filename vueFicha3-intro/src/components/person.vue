<template>
    <div>
        <ul>
            <li>Primeiro Nome: {{ person.firstName }}</li>
            <li>Último Nome: {{ person.lastName }}</li>
            <li>Idade: {{ person.age }}</li>
        </ul>
        <button @click="printDataPerson()">Imprimir Dados da Pessoa (Método)</button>
        <p>{{ printDataPersonComputed }}</p>
        <p>{{ getFullNameComputed }}</p>
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
            return `COMPUTED--> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`;
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