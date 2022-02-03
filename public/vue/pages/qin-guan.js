import "https://unpkg.com/flowbite@1.3.2/dist/datepicker.js"

export const GridCard = {
    template: `
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <slot></slot>
        </div>
    `,
}

export const QinGuan = {
    template: `
<div class="flex flex-col w-full">
    <v-header/>
    <div class="flex flex-col flex-1 p-3 md:pt-10 md:px-20 lg:px-32 xl:px-52">
        <div class="flex flex-col justify-center items-center p-10 mb-10 w-full h-96 bg-center bg-cover rounded-xl shadow-md bg-blend-darken sm:items-start bg-slate-600/75"
             style="background-image: url('images/rws.jpg')">
            <h1 class="text-5xl font-bold leading-normal text-center text-slate-200 sm:text-left font-display">Resorts
                World<br/>Sentosa</h1>
            <button @click="toBooking"
                    type="button"
                    class="mt-3 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-body">
                Book now
            </button>
        </div>

        <grid-card>
            <div>
                <span class="font-bold text-violet-800 uppercase font-display">featured attraction</span>
                <h2 class="mt-3 text-3xl font-medium font-semibold text-orange-700 font-display">
                    Universal Studios Singapore
                </h2>
                <p class="mt-2 text-lg font-body">
                    Southeast Asia’s first and only Universal Studios theme park, featuring 24 rides, shows and
                    attractions in seven themed zones.
                </p>
            </div>
            <div class="w-full h-64 bg-center bg-cover rounded-lg shadow-lg md:col-span-2 md:h-80"
                 style="background-image: url('images/globe.jpg')"></div>
        </grid-card>
        
        <hr class="my-10"/>
        
        <grid-card>
            <div class="w-full h-64 bg-center bg-cover rounded-lg shadow-lg md:col-span-2 md:h-80"
                 style="background-image: url('images/sea.jpg')"></div>
            <div>
                <h2 class="text-3xl font-medium font-semibold text-indigo-700 font-display">
                    SEA Aquarium Singapore
                </h2>
                <p class="mt-2 text-lg font-body">
                    Enter and explore the marine realm of S.E.A. Aquarium, home to more than 100,000 marine animals of
                    over 1,000 species, across 45 different habitats, each one as fascinating as the next. It's a
                    marine life experience you won’t forget.
                </p>
            </div>
        </grid-card>

        <div id="form"></div>
        <div class="h-[1000px] mt-3">
            <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">When are you
                    going?</h5>
                <form class="mw-full">
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input datepicker type="text"
                               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Select date">
                    </div>
                    <button type="button"
                            class="px-3 py-2 mt-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Find available slots
                    </button>
                </form>
            </div>
        </div>
    </div>
    <v-footer></v-footer>
</div>
    `,
    methods: {
        toBooking: () => {
            window.location.href = "#form"
        }
    },
    components: {
        'grid-card': GridCard
    }
}
