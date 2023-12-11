export default {
    template: /*html*/`
    <form @submit.prevent="add">
        <input v-model="newAssignment" placeholder="New assignment..." class="rounded p-2 text-gray-600">
        <button type="submit" class="bg-blue-600 p-2 rounded ml-4">Add</button>
    </form>
    `,
    data() {
        return {
            newAssignment:''
        }
    },
    methods: {
        add(){
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    },
}