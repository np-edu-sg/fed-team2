export const Label = {
    //language=HTML
    template: `
        <label :for="htmlFor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <slot></slot>
        </label>
    `,
    props: ['htmlFor']
}
