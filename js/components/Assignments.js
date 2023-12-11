import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: { AssignmentList, AssignmentCreate },
    template: /*html*/`
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed!"></assignment-list>       
        <assignment-create @add="add"></assignment-create>
    </section>
    `, 
    data(){
        return{
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ]
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
        add(name){
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            });
            this.newAssignment = ''
        },
    },
}