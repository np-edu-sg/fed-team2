import "https://unpkg.com/flowbite@1.3.2/dist/datepicker.js"

export const QinGuan = {
    template: `
        <div class="w-screen h-screen flex flex-col">
            <v-header/>
            <div class="flex-1 flex flex-col m-3 md:m-10">
                <div class="shadow-md w-full rounded-xl p-10 h-96 flex flex-col items-center sm:items-start justify-center bg-slate-600/75 bg-cover bg-center bg-blend-darken" style="background-image: url('images/rws.jpg')">
                    <h1 class="text-5xl text-slate-200 font-bold leading-normal text-center sm:text-left">Resorts World<br/>Sentosa</h1>
                    <button type="button" class="mt-3 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book now</button>
                </div>
                
                <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                        <h2 class="text-3xl font-medium text-amber-700">Universal Studios Singapore</h2>
                        <p class="text-lg mt-2">Southeast Asia’s first and only Universal Studios theme park, featuring 24 rides, shows and attractions in seven themed zones.</p>
                    </div>
                    <img class="shadow-lg rounded-lg col-span-2" src="images/globe.jpg"/>
                </div>
                
<!--                <div class="flex justify-between">-->
<!--                    <div href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">-->
<!--                        <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">When are you going?</h5>-->
<!--                        <form>-->
<!--                            <div class="relative">-->
<!--                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">-->
<!--                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>-->
<!--                                </div>-->
<!--                                <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">-->
<!--                            </div>-->
<!--                            <button type="button" class="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Find available slots</button>-->
<!--                        </form>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
            <v-footer></v-footer>
        </div>
    `
}
