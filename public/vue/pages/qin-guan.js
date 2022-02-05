import {computed, reactive, ref, watch} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.prod.js"

const header = ["Ticket", "Description", "Adult Price", "Child Price"]

const pricings = {
    "Universal Studios Singapore": [
        [
            `[SG Residents] Mastercard® Exclusive:\nFestive HUAT Package`,
            `Adult Package includes:
            One (1) Universal Studios Singapore Adult (Ages 13 and above) Dated One-Day Ticket
            One (1) SGD10 Retail Voucher with no minimum spend
            One (1) SGD10 F&B Voucher with no minimum spend
            Mastercard Gift Redemption Voucher`,
            88,
            "N/A"
        ],
        [
            `[SG Residents] Mastercard® Exclusive:\nJumbo Dessert Thrills Package`,
            `Package includes:
            One (1) Universal Studios Singapore Adult Dated One-Day Ticket
            One (1) High Tea + Jumbo Dessert Redemption Voucher for 2 pax*^
            Mastercard Gift Redemption Voucher`,
            100,
            "N/A"
        ],
        [
            `[Non-Residents] One-Day Ticket`,
            `Adult (Ages 13 and above) - SGD81 | Child (Ages 4-12) - SGD61`,
            81,
            61
        ],
    ],
    "SEA Aquarium": [
        [
            "[SG Residents] Mastercard® Exclusive \nFun Package + Free Gift",
            `Treat SGD20 Retail Voucher (Redeemable at Candylicious, Hershey’s Chocolate World Singapore,
            Harry's Resorts World Sentosa and LEGO® Certified Store At Resorts World Sentosa)
            Treat Mastercard Exclusive Gift`,
            48,
            "N/A"
        ],
        [
            "[SG Residents] Fun Package",
            `Treat SGD20 Retail Voucher (Redeemable at Candylicious, Hershey’s Chocolate World Singapore, 
            Harry's Resorts World Sentosa and LEGO® Certified Store At Resorts World Sentosa)
            Treat Free set of Eutopia Quest adventure map for Child only`,
            38,
            "N/A"
        ]
    ],
    "Adventure Cove Waterpark": [
        [
            "[SG Residents] Morning Splash",
            `Timing 9am to 1pm 
            Treat FREE breakfast snack pack`,
            25,
            "N/A"
        ],
        [
            "[SG Residents] Afternoon Splash",
            `Timing 2pm to 6pm
            Treat FREE ice-cream snack pack`,
            25,
            "N/A"
        ],
        [
            "Adventure Express (One-Day Ticket Required)",
            `Skip the regular lines at participating attractions with Adventure Express! Dated ticket for single use.
            Starts from SGD15
            Applicable for Adventure River, Bluwater Bay, Riptide Rocket, Rainbow Reef and Dueling Racer.`,
            15,
            "N/A"
        ]
    ]
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

                <v-grid-card>
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
                </v-grid-card>

                <hr class="my-10"/>

                <v-grid-card>
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
                </v-grid-card>

                <hr class="my-10"/>

                <v-grid-card>
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
                </v-grid-card>

                <div id="form"></div>
                <hr class="my-10"/>

                <div class="h-[1000px]">
                    <v-card :fluid="true">
                        <div class="p-4 bg-gradient-to-br from-orange-400 to-yellow-500">
                            <h5 class="mb-4 text-2xl font-semibold tracking-tight text-gray-900 font-display dark:text-white">
                                Book an attraction now
                            </h5>
                            <div class="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 font-body">
                                <v-input
                                        v-model="form.date"
                                        type="date"
                                        label="I'm going on"
                                        :min="new Date().toISOString().split('T')[0]"
                                />
                                <v-select
                                        v-model="form.attraction"
                                        title="I want to buy tickets for"
                                        :options="attractionNames"
                                />
                            </div>
                        </div>

                        <div class="overflow-x-scroll font-body">
                            <table class="w-full">
                                <thead class="bg-orange-100 dark:bg-gray-700">
                                <tr>
                                    <th>
                                        <div class="p-4">
                                            <input type="checkbox"
                                                   :checked="selectedAll"
                                                   @change="selectAll"
                                            >
                                        </div>
                                    </th>

                                    <th v-for="item in header"
                                        scope="col"
                                        :class="tableClasses['th']"
                                    >
                                        {{ item }}
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(item, idx) in attraction"
                                    class="bg-orange-50 border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th>
                                        <div class="p-4">
                                            <input type="checkbox"
                                                   :value="item[0]"
                                                   v-model="selected[idx]"
                                            >
                                        </div>
                                    </th>

                                    <td v-for="(text, idx2) in item"
                                        :class="idx2 === 0 ? tableClasses['td-bold'] : tableClasses['td']">
                                        <span>
                                            {{ text }}
                                        </span>
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

        const selected = ref([])
        const selectedAll = computed(() => selected.value.length === attraction.value.length && selected.value.every(i => i))

        const select = (idx) => selected.push(idx)
        const toBooking = () => {
            window.location.href = "#form"
        }
        const selectAll = () => {
            const c = []
            for (let idx = 0; idx < attraction.value.length; idx++) {
                c[idx] = !selectedAll.value
            }
            selected.value = c
        }

        watch(() => form.attraction, () => {
            selected.value = []
        })

        return {
            selectedAll,
            attractionNames,
            attraction,
            selected,
            pricings,
            form,

            header,
            tableClasses,

            select,
            toBooking,
            selectAll
        }
    },
    components: {
        'v-grid-card': GridCard
    }
}
