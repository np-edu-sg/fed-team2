const button = {
    "default": "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    "alternative": "py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
    "dark": "text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
    "light": "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800",
    "green": "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    "red": "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    "yellow": "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  dark:focus:ring-yellow-900",
    "purple": "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900\"",
}

export const Button = {
    //language=HTML
    template: `
        <button :class="buttonClass" @click="click" :type="type">
            <slot></slot>
        </button>
    `,
    props: {
        'href': {
            type: String
        },
        'color': {
            type: String
        },
        'button': {
            type: String,
            default: 'button'
        }
    },
    methods: {
        click() {
            if (this.href) window.location.href = this.href
        }
    },
    wc: Object.values(button),
    computed: {
        buttonClass: ({color = "default"}) => button[color]
    }
}
