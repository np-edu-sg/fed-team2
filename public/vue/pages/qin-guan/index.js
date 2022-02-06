import {computed, reactive, ref, watch} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.prod.js"
import {pricings} from "./pricings.js";

const header = ["Ticket", "Description", "Adult Price", "Child Price"]

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
                <div class="p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert" v-if="error">
                    <div class="flex items-center">
                        <svg class="mr-2 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <h3 class="text-lg font-medium text-red-700 dark:text-red-800">An error occurred processing your
                            order</h3>
                    </div>
                    <div class="mt-2 mb-4 text-sm text-red-700 dark:text-red-800">
                        {{ error }}
                    </div>
                    <div class="flex">
                        <v-button color="red" href="index.html">Dismiss</v-button>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center p-6 mb-10 w-full h-96 bg-center bg-cover rounded-xl shadow-md bg-blend-darken sm:items-start bg-slate-600/75"
                     style="background-image: url('images/rws.jpg')">
                    <h1 class="text-5xl font-bold leading-normal text-center text-slate-200 sm:text-left font-display">
                        Resorts
                        World<br/>Sentosa</h1>
                    <div class="flex">
                        <v-button @click="toBooking">
                            Book now
                        </v-button>
                        <v-button color="alternative">
                            View bookings
                        </v-button>
                    </div>
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

                <v-card :fluid="true" class="mb-10">
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

                        <div class="pt-6 mb-0 font-semibold text-md font-display">
                            Available tickets:
                        </div>
                    </div>

                    <div class="overflow-x-scroll font-body">
                        <table class="w-full">
                            <thead class="bg-orange-100 dark:bg-gray-700">
                            <tr>
                                <th>
                                    <div class="p-4">
                                        <input type="checkbox" id="check"
                                               :checked="selectedAll"
                                               @change="selectAll"
                                        >
                                    </div>
                                </th>

                                <th v-for="item in header"
                                    :class="tableClasses['th']"
                                    scope="col"
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

                    <div v-if="selectedAny" class="p-4">
                        <v-button color="red" @click="cont">Continue</v-button>
                        <v-button color="alternative" @click="cancel">Cancel</v-button>
                    </div>
                </v-card>
            </div>
            <v-footer></v-footer>
        </div>
    `,
    setup() {
        let error = "";
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("error")) {
            error = urlParams.get("error")
        }

        const attractionNames = computed(() => Object.keys(pricings))
        const form = reactive({
            date: new Date().toISOString().split('T')[0],
            attraction: attractionNames.value[0]
        })
        const attraction = computed(() => pricings[form.attraction])

        const selected = ref(new Array(attraction.value.length).fill(false))
        const selectedAny = computed(() => selected.value.length > 0 && selected.value.some(i => i === true))
        const selectedAll = computed(() => selected.value.length === attraction.value.length && selected.value.every(i => i === true))

        const select = (idx) => selected.push(idx)
        const cancel = () => selected.value = new Array(attraction.value.length).fill(false)
        const toBooking = () => {
            window.location.href = "#form"
        }
        const selectAll = () => {
            selected.value = new Array(attraction.value.length).fill(!selectedAll.value)
        }

        const cont = () => {
            const tickets = selected.value.map((v, idx) => {
                if (!v) return undefined;
                return {data: pricings[form.attraction][idx], count: {adult: 1, child: 0}}
            }).filter(i => i)
            const temp = {
                ...form,
                tickets,
            }
            localStorage.setItem("temp", JSON.stringify(temp))
            localStorage.setItem("temp_section", "1")
            window.location.href = "cart.html"
        }

        watch(() => form.attraction, () => {
            selected.value = new Array(attraction.value.length).fill(false)
        })

        return {
            error,
            attractionNames,
            attraction,
            selectedAll,
            selectedAny,
            selected,
            pricings,
            form,

            header,
            tableClasses,

            select,
            cancel,
            cont,
            toBooking,
            selectAll
        }
    },
    components: {
        'v-grid-card': GridCard
    }
}

export * from "./cart.js"
export * from "./bookings.js"
