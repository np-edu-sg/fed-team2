import {computed, ref, watch} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.prod.js"

export const Cart = {
    //language=HTML
    template: `
        <div class="flex flex-col w-full h-screen">
            <v-header></v-header>

            <div class="flex flex-col flex-1 p-3 md:pt-10 md:px-20 lg:px-32 xl:px-52">
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="index.html"
                               class="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                                Resorts World Sentosa
                            </a>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Cart</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div class="mt-4">
                    <h1 class="mb-4 text-3xl font-semibold font-display">Your cart</h1>

                    <v-card :class="'duration-200 ' + (section !== 1 && 'opacity-75 cursor-pointer hover:scale-105')"
                            @click="toOrderOverview">
                        <div class="flex flex-col items-center p-10" v-if="orders.tickets.length === 0">
                            <span class="my-6 text-2xl font-body text-slate-500">
                                Your cart is empty D:
                            </span>
                            <v-button @click="toHomepage">Back to homepage</v-button>
                        </div>
                        <form class="p-4" @reset.prevent="reset" @submit.prevent="toPersonalInfo" v-else>
                            <h2 class="text-2xl font-semibold text-orange-600 font-display">{{ orders.attraction }}</h2>

                            <div v-for="(ticket, idx) in orders.tickets" class="font-body" v-if="section === 1">
                                <div class="mt-3 mb-8">
                                    <div class="flex justify-between">
                                        <span class="text-lg font-semibold text-slate-800">{{ ticket.data[0] }}</span>

                                        <a class="duration-100 cursor-pointer fill-slate-400 hover:fill-red-500 hover:scale-110"
                                           @click="del(idx)">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                                 width="24px">
                                                <path d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="flex flex-col mt-2 md:flex-row md:items-center md:justify-between text-md text-slate-600">
                                        <div class="flex items-center">
                                            <span>Adult:</span>
                                            <v-input type="number" class="px-4" v-model.number="ticket.count.adult"
                                                     min="1"></v-input>
                                            <span>× \${{ ticket.data[2] }}</span>
                                        </div>

                                        <span class="mt-4 text-lg font-bold md:m-0">
                                            <span class="text-green-500">= </span>
                                            <span>\${{ ticket.data[2] * ticket.count.adult }}</span>
                                        </span>
                                    </div>
                                    <div class="flex flex-col mt-2 md:flex-row md:items-center md:justify-between text-md text-slate-600"
                                         v-if="ticket.data[3] !== 'N/A'">
                                        <div class="flex items-center">
                                            <span>Child:</span>
                                            <v-input type="number" class="px-4" v-model.number="ticket.count.child"
                                                     min="0"></v-input>
                                            <span>× \${{ ticket.data[3] }}</span>
                                        </div>

                                        <span class="mt-4 text-lg font-bold md:m-0">
                                            <span class="text-green-500">= </span>
                                            <span>\${{ ticket.data[3] * ticket.count.child }}</span>
                                        </span>
                                    </div>
                                </div>
                                <hr/>
                            </div>

                            <div class="flex justify-between mt-4 text-slate-800 font-body">
                                <span class="text-lg font-semibold">Total</span>
                                <span class="mt-4 text-lg font-bold text-right md:m-0">
                                    <span class="text-green-500">= </span>
                                    <span>\${{ total }}</span>
                                    <br/>
                                    <span class="text-xs font-light text-slate-500">Inclusive of GST</span>
                                </span>
                            </div>

                            <div class="flex justify-between mt-4 text-slate-800 font-body">
                                <span class="text-lg font-semibold">Booking date</span>
                                <span class="mt-4 text-lg font-bold text-right md:m-0">
                                    <span>{{ orders.date }}</span>
                                </span>
                            </div>

                            <div class="flex justify-end mt-8" v-if="section === 1">
                                <v-button color="alternative" type="reset">Reset</v-button>
                                <v-button color="red" type="submit">Continue</v-button>
                            </div>
                        </form>
                    </v-card>

                    <v-card :class="'duration-200 mt-6 mb-20 ' + (section !== 2 && 'opacity-75')"
                            v-if="orders.tickets.length !== 0">
                        <form class="p-4" @submit.prevent="submitOrder" @reset.prevent="resetOrder">
                            <h2 class="text-2xl font-semibold text-indigo-500 font-display">Your details</h2>

                            <div v-if="section === 2" class="mt-4">
                                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <v-input label="Name" v-model="personalInfo.name" type="text"></v-input>
                                </div>

                                <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                                    <v-input label="Email" v-model="personalInfo.email" type="email"></v-input>
                                    <v-input label="Phone" v-model="personalInfo.phone" type="tel"></v-input>

                                    <v-input label="Address" v-model="personalInfo.address"></v-input>
                                </div>

                                <div class="flex justify-end mt-8">
                                    <v-button color="alternative" type="reset">Reset</v-button>
                                    <v-button color="red" type="submit">Confirm order</v-button>
                                </div>
                            </div>
                        </form>
                    </v-card>
                </div>
            </div>
            <v-footer></v-footer>
        </div>
    `,
    setup() {
        try {
            /**
             * Section:
             *  1: Orders overview
             *  2: Personal Info
             */
            // doesnt work when cleared localstorage
            const section = ref(parseInt(localStorage.getItem("temp_section")) ?? 1)
            const personalInfo = ref(JSON.parse(localStorage.getItem("temp_personal_info")) ?? {
                name: "",
                email: "",
                phone: "",
                address: "",
            })
            const orders = ref(JSON.parse(localStorage.getItem("temp")))

            const total = computed(() => {
                let t = 0
                for (const ticket of orders.value.tickets) {
                    t += ticket.count.adult * ticket.data[2] + (ticket.data[3] !== "N/A" ? ticket.count.child * ticket.data[3] : 0)
                }
                return t
            })

            watch(() => orders.value, () => {
                localStorage.setItem("temp", JSON.stringify(orders.value))
            }, {deep: true})

            watch(() => section.value, () => {
                localStorage.setItem("temp_section", section.value)
            })

            watch(() => personalInfo.value, () => {
                localStorage.setItem("temp_personal_info", JSON.stringify(personalInfo.value))
            }, {deep: true})

            const reset = () => {
                for (const ticket of orders.value.tickets) {
                    ticket.count.adult = 1;
                    ticket.count.child = 0;
                }
            }
            const del = (idx) => {
                orders.value.tickets.splice(idx, 1)
            }

            const submitOrder = () => {

            }

            const resetOrder = () => {
                for (const key in personalInfo.value) {
                    personalInfo.value[key] = ""
                }
            }

            const toOrderOverview = () => section.value = 1
            const toPersonalInfo = () => section.value = 2

            const toHomepage = () => window.location.href = 'index.html'

            return {
                orders,
                total,
                section,
                personalInfo,

                reset,
                del,
                submitOrder,
                resetOrder,
                toOrderOverview,
                toPersonalInfo,
                toHomepage
            }
        } catch (e) {
            // Clear and redirect with error if there's weird issues loading temp data
            localStorage.clear();
            window.location.href = `index.html?error=${e}`
        }
    }
}
