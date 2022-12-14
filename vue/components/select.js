export const Select = {
    //language=HTML
    template: `
        <div>
            <v-label>
                {{ title }}
                <select
                        :value="modelValue"
                        @change="$emit('update:modelValue', $event.target.value)"
                        id="select"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option v-for="option in options">{{ option }}</option>
                </select>
            </v-label>
        </div>
    `,
    props: ['title', 'options', 'modelValue'],
    emits: ['update:modelValue']
}
