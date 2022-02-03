export const Card = {
    template: `
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md duration-200 ease-out dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
            <a :href="href">
                <img class="rounded-t-lg aspect-video" :src="src" :alt="alt"/>
            </a>
            <div class="p-5">
                <a :href="href">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ title }}
                    </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
                <a :href="href"
                   class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                    Learn more
                </a>
            </div>
        </div>

    `,
    props: ['src', 'alt', 'href', 'title', 'description']
}
