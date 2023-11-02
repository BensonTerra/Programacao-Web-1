<template>
    <div>
        <form @submit.prevent="createTask">
            <input type="text" placeholder="Task name" required v-model="txtTaskName">
            <input type="submit" value="Add task">
        </form>
        <div>
            <button @click="removeAll">Remove all tasks</button>
            <button @click="removeAllSelect">Remove all tasks selected</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                txtTaskName: ""
            }
        },
        methods: {
            createTask() {
                this.$emit('addTask', { text: this.txtTaskName, completed: false })
                this.txtTaskName = ''
            },
            removeAll() {
                this.$emit('removeAll')
            },
            removeAllSelect(){
                this.$emit('removeAllSelected')
            }
        },
    }
</script>

<style>

</style>