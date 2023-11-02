<template>
    <div>
        <table>
            <tr>
                <th @click="sortTasks">TaskName</th>
                <th>Status</th>
            </tr>
            <tr v-for="(task,index) in taskList" :key="index">
                <td>
                    <del v-if="task.completed">{{ task.text }}</del>
                    <span v-else>{{ task.text }}</span>    
                </td>
                <td>
                    <input type="checkbox" v-model="task.completed" @click="changeTask(index)">
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            taskList: {
                taskList: Array 
            },
        },
        methods: {
            changeTask(index) {
                this.$emit('changeTask', index)
            },
            sortTasks() {
                this.$emit('sortTasksName')
            }
        },
    }
</script>

<style>
    table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc; /* Adiciona uma borda esquerda na tabela */
    border-right: 1px solid #ccc; /* Adiciona uma borda direita na tabela */
    }

    th, td {
    padding: 10px;
    text-align: center; /* Centraliza o texto */
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc; /* Adiciona uma borda esquerda nas células */
    }

    th:last-child, td:last-child {
    border-right: none; /* Remove a borda direita da última coluna */
    }

    thead {
    background-color: #000000;
    color: #ffffff; /* Define a cor do texto no cabeçalho */
    }
</style>