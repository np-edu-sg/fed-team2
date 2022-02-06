import {computed, ref} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.prod.js"

export const Bookings = {
    //language=HTML
    template: `
        <div class="flex flex-col w-full h-screen">
            <v-header></v-header>

            <div class="flex flex-col flex-1 p-3 md:pt-10 md:px-20 lg:px-32 xl:px-52 my-6">
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
                                <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Bookings</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div class="mt-4">
                    <h1 class="mb-4 text-3xl font-semibold font-display">Your bookings</h1>

                    <v-card v-if="bookings.length === 0">
                        <div class="flex flex-col items-center p-10">
                            <span class="my-6 text-2xl font-body text-slate-500">
                                You have no bookings D:
                            </span>
                            <v-button href="index.html">Back to homepage</v-button>
                        </div>
                    </v-card>

                    <div v-else v-for="(booking, idx) in bookings" class="mt-6">
                        <v-card :class="'duration-200 p-4 ' + (selectedBooking !== idx && 'opacity-75 cursor-pointer hover:scale-105')"
                                @click="selectBooking(idx)">
                            <div class="flex justify-between">
                                <h3 class="text-xl font-semibold text-orange-600 font-display">
                                    {{ booking.orders.attraction }}
                                </h3>

                                <h3 class="text-xl font-semibold text-slate-800 font-display">
                                    \${{ booking.total }}
                                </h3>
                            </div>

                            <div class="flex justify-between my-2">
                                <h3 class="text-md font-semibold font-display">
                                    Booked for
                                </h3>

                                <h3 class="text-md font-semibold text-slate-800 font-display">
                                    {{ booking.orders.date }}
                                </h3>
                            </div>

                            <div v-for="ticket in booking.orders.tickets"
                                 :class="'font-body duration-200 ' + (selectedBooking === idx && 'mt-6')">
                                <span class="text-md">
                                    {{ ticket.data[0] }}
                                </span>
                                <div v-if="selectedBooking === idx" class="whitespace-pre">
                                    <div class="flex flex-col mt-2 md:flex-row md:items-center md:justify-between text-md text-slate-600">
                                        <div class="flex items-center">
                                            <span>Adult: </span>
                                            <span>{{ ticket.count.adult }}</span>
                                            <span> × \${{ ticket.data[2] }}</span>
                                        </div>

                                        <span class="mt-4 text-lg font-bold md:m-0">
                                            <span class="text-green-500">= </span>
                                            <span>\${{ ticket.data[2] * ticket.count.adult }}</span>
                                        </span>
                                    </div>
                                    <div class="flex flex-col mt-2 md:flex-row md:items-center md:justify-between text-md text-slate-600"
                                         v-if="ticket.data[3] !== 'N/A'">
                                        <div class="flex items-center">
                                            <span>Child: </span>
                                            <span>{{ ticket.count.child }} </span>
                                            <span> × \${{ ticket.data[3] }}</span>
                                        </div>

                                        <span class="mt-4 text-lg font-bold md:m-0">
                                            <span class="text-green-500">= </span>
                                            <span>\${{ ticket.data[3] * ticket.count.child }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div v-if="selectedBooking === idx">
                                <hr class="my-3"/>

                                <h3 class="text-md font-semibold font-display">
                                    Booked by
                                </h3>

                                <div class="flex flex-col md:flex-row justify-between my-2">
                                    <h3 class="text-md">
                                        Name
                                    </h3>

                                    <h3 class="text-md font-semibold text-slate-600 font-body">
                                        {{ booking.personalInfo.name }}
                                    </h3>
                                </div>

                                <div class="flex flex-col md:flex-row justify-between my-2">
                                    <h3 class="text-md">
                                        Email
                                    </h3>

                                    <h3 class="text-md font-semibold text-slate-600 font-body">
                                        {{ booking.personalInfo.email }}
                                    </h3>
                                </div>

                                <div class="flex flex-col md:flex-row justify-between my-2">
                                    <h3 class="text-md">
                                        Phone
                                    </h3>

                                    <h3 class="text-md font-semibold text-slate-600 font-body">
                                        {{ booking.personalInfo.phone }}
                                    </h3>
                                </div>

                                <div class="flex flex-col md:flex-row justify-between my-2">
                                    <h3 class="text-md">
                                        Address
                                    </h3>

                                    <h3 class="text-md font-semibold text-slate-600 font-body">
                                        {{ booking.personalInfo.address }}
                                    </h3>
                                </div>

                            </div>
                        </v-card>
                    </div>

                </div>
            </div>

            <v-footer></v-footer>
        </div>
    `,
    setup() {
        const bookings = computed(() => JSON.parse(localStorage.getItem("bookings") ?? "[]"))
        const selectedBooking = ref(-1)

        const selectBooking = (idx) => selectedBooking.value = idx

        return {
            bookings,
            selectedBooking,

            selectBooking
        }
    }
}
