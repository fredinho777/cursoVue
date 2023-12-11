import AssignmentList from "./AssignmentList.js";
export default {
    components: { AssignmentList },
    template: /*html*/`
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed!"></assignment-list>
        <form @submit.prevent="add">
            <input v-model="newAssignment" placeholder="New assignment..." class="rounded p-2 text-gray-600">
            <button type="submit" class="bg-blue-600 p-2 rounded ml-4">Add</button>
        </form>
    </section>
    `, 
    data(){
        return{
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ],
            newAssignment:''
        }
    },
    computed: {
        filters(){
            return {
                inProgress: this.assignments.filter(assignments => ! assignments.complete),
                completed: this.assignments.filter(assignments => assignments.complete)
            }
        }
    },
    methods: {
        add(){
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });
            this.newAssignment = ''
        },
    },
}