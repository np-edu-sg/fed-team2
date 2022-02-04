export const Card = {
    //language=HTML
    template: `
        <div :class="containerClass">
            <slot></slot>
        </div>
    `,
    computed: {
        containerClass: ({animated, fluid}) => {
            let s = ["bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"]
            if (animated)
                s.push("duration-200 ease-out hover:scale-105")
            if (fluid)
                s.push("w-full")
            else
                s.push("w-sm mw-sm")
            return s.join(" ")
        }
    },
    props: ['animated', 'fluid']
}
