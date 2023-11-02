<template>
    <div>
        <h1>VUETASK</h1>
        <div>
            <taskForm 
                @addTask="insertTask" 
                @removeAll="removeAllTasks"
                @removeAllSelected = "removeAllTasksSelected" 
            />
            <taskList 
                :taskList="tasks" 
                @changeTask="updateTask"
                @sortTasksName="tasks.sort(sortByName)"
            />
        </div>
    </div>
</template>

<script>
    import taskForm from './taskForm.vue';
    import taskList from './taskList.vue';

    export default {
        data() {
            return {
                tasks: []
            }
        },
        components: {
            taskForm,
            taskList
        },
        methods: {
            insertTask(task) {
                this.tasks.push(task);
            },
            updateTask(index) {
                if (this.tasks[index].completed) {
                    alert(`Task ${this.tasks[index].text} completed with success!` )  
                } 
                else {
                    alert(`Task ${this.tasks[index].text} was not completed!` )  
                }
            },
            removeAllTasks(){
                this.tasks = []
            },
            removeAllTasksSelected() {
                this.tasks = this.tasks.filter( task => task.completed == false)
            },
            sortByName(a,b){
                console.table(this.tasks)
                //return a.text.localeCompare(b.text);
            },
        },
    }
</script>

<style>

</style>