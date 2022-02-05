import {computed, reactive} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.prod.js"

const header = ["Ticket Type", "Description", "Adult Price", "Child Price"]

const pricings = {
    "Universal Studios Singapore": [
        [
            `[SG Residents] Mastercard® Exclusive:\nFestive HUAT Package`,
            `Adult Package includes:
                One (1) Universal Studios Singapore Adult (Ages 13 and above) Dated One-Day Ticket
                One (1) SGD10 Retail Voucher with no minimum spend^
                One (1) SGD10 F&B Voucher with no minimum spend*
                Mastercard Gift Redemption Voucher`,
            88,
            "N/A"
        ],
        [
            `[SG Residents] Mastercard® Exclusive:\nUniversal Studios Singapore Jumbo Dessert Thrills Package`,
            `Package includes:
                One (1) Universal Studios Singapore Adult Dated One-Day Ticket
                One (1) High Tea + Jumbo Dessert Redemption Voucher for 2 pax*^
                Mastercard Gift Redemption Voucher`,
            100,
            "N/A"
        ],
        [
            `[Non-Residents] Universal Studios Singapore One-Day Ticket`,
            `Adult (Ages 13 and above) - SGD81 | Child (Ages 4-12) - SGD61`,
            81,
            61
        ],
    ],
    "SEA Aquarium": [
        [
            "poopoo",
            `Adult (Ages 13 and above) - SGD81 | Child (Ages 4-12) - SGD61`,
            81,
            61
        ],
    ],
    "Adventure Cove Waterpark": []
}

const tableClasses = {
    "th": "py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400",
    "td-bold": "py-4 px-6 text-sm font-medium text-gray-900 whitespace-pre dark:text-white",
    "td": "py-4 px-6 text-sm text-gray-500 whitespace-pre dark:text-gray-400"
}

export const GridCard = {
    //language=HTML
    template: `
        <div class="grid grid-cols-1 gap-6 rounded-md md:grid-cols-3">
            <slot></slot>
        </div>
    `,
}

export const QinGuan = {
    //language=HTML
    template: `
        <div class="flex flex-col w-full">
            <v-header/>
            <div class="flex flex-col flex-1 p-3 md:pt-10 md:px-20 lg:px-32 xl:px-52">
                <div class="flex flex-col justify-center items-center p-10 mb-10 w-full h-96 bg-center bg-cover rounded-xl shadow-md bg-blend-darken sm:items-start bg-slate-600/75"
                     style="background-image: url('images/rws.jpg')">
                    <h1 class="text-5xl font-bold leading-normal text-center text-slate-200 sm:text-left font-display">
                        Resorts
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
                            Enter and explore the marine realm of S.E.A. Aquarium, home to more than 100,000 marine
                            animals of
                            over 1,000 species, across 45 different habitats, each one as fascinating as the next. It's
                            a
                            marine life experience you won’t forget.
                        </p>
                    </div>
                </grid-card>

                <hr class="my-10"/>

                <grid-card>
                    <div class="w-full h-64 bg-center bg-cover rounded-lg shadow-lg md:col-span-2 md:h-80"
                         style="background-image: url('images/cove.jpg')"></div>
                    <div>
                        <h2 class="text-3xl font-medium font-semibold text-indigo-700 font-display">
                            Adventure Cove Waterpark
                        </h2>
                        <p class="mt-2 text-lg font-body">
                            Southeast Asia’s first hydro-magnetic coaster isn’t our only claim to fame! From zooming
                            down
                            high-speed water slides to drifting lazily down a winding river; snorkelling with 20,000
                            marine
                            fish to wading with friendly rays in the shallows. There’s a wave of fun waiting for the
                            thrill-seeker and nature lover in you, here at Adventure Cove Waterpark. So get your goggles
                            ready!
                        </p>
                    </div>
                </grid-card>

                <div id="form"></div>
                <hr class="my-10"/>

                <div class="h-[1000px]">
                    <v-card :fluid="true">
                        <div class="p-4 bg-orange-400">
                            <h5 class="mb-4 text-2xl font-semibold tracking-tight text-gray-900 font-display dark:text-white">
                                Book an attraction now
                            </h5>
                            <div class="grid flex-1 grid-cols-1 gap-6 mb-6 md:mr-6 md:mb-0 md:grid-cols-2">
                                <v-input
                                        v-model="form.date"
                                        type="date"
                                        label="Select a date"
                                        :min="new Date().toISOString().split('T')[0]"
                                />
                                <v-select
                                        v-model="form.attraction"
                                        title="Select an attraction"
                                        :options="attractionNames"
                                />
                            </div>
                        </div>

                        <div class="mt-6 overflow-x-scroll bg-orange-300">
                            <table class="w-full">
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th v-for="item in header"
                                        scope="col"
                                        :class="tableClasses['th']"
                                    >
                                        {{ item }}
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in attraction"
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td v-for="(text, idx) in item"
                                        :class="idx === 0 ? tableClasses['td-bold'] : tableClasses['td']">
                                        {{ text }}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </v-card>
                </div>
            </div>
            <v-footer></v-footer>
        </div>
    `,
    setup() {
        const attractionNames = computed(() => Object.keys(pricings))
        const form = reactive({
            date: "",
            attraction: attractionNames.value[0]
        })
        const attraction = computed(() => pricings[form.attraction])

        return {
            attractionNames,
            tableClasses,
            attraction,
            pricings,
            header,
            form,
        }
    },
    methods: {
        toBooking() {
            window.location.href = "#form"
        },
    },
    components: {
        'grid-card': GridCard
    }
}
