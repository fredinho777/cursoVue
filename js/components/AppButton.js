export default {
    template:`
        <button class="bg-gray-200 hover:gray-400 border rounded px-4 py-2 disabled:cursor-not-allowed" :disabled="processing">
            <slot/>
        </button>
    `,
    data() {
        return {
            processing: false
        };
    }
}