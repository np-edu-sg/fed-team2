export const Input = {
    //language=HTML
    template: `
        <v-label>
            {{ label }}
            <input
                    @change="$emit('update:modelValue', $event.target.value)"
                    :value="modelValue"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-bind="$attrs"
                    required
            >
        </v-label>
    `,
    props: ['label', 'modelValue'],
    emits: ['update:modelValue'],
}
