const items = [
    {
        title: "Resorts World Sentosa",
        href: "qin-guan",
        img: "qin-guan/images/globe.jpg"
    },
    {
        title: "Gardens by the Bay",
        href: "farrell",
        img: "farrell/images/farrell.jpeg"
    },
    {
        title: "Marina Bay Sands",
        href: "ryan",
        img: "ryan/images/mbs1.jpg"
    },
    {
        title: "Art Science Museum",
        href: "yun-e",
        img: "yun-e/images/artsciencemuseum.jpg"
    },
    {
        title: "Wild Wild Wet",
        href: "richard",
        img: "richard/img/wildwildwethpphoto.png"
    },
]

export const Landing = {
    //language=HTML
    template: `
        <div class="flex flex-col w-screen h-screen bg-slate-50">
            <v-header></v-header>
            <div class="container flex-1 px-3 pt-6 pb-6 mx-auto sm:px-0">
                <h1 class="text-4xl font-semibold font-display">Attractions</h1>
                <div class="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <v-card v-for="item in items" :animated="true">
                        <a :href="item.href">
                            <img class="rounded-t-lg aspect-video" :src="item.img" alt="Your image here" />
                        </a>
                        <div class="p-5">
                            <a :href="item.href">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-display">
                                    {{ item.title }}
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-body">
                                {{ item.description }}
                            </p>
                            <v-button :href="item.href" color="red">
                                Learn more
                            </v-button>
                        </div>
                    </v-card>
                </div>
            </div>
            <v-footer></v-footer>
        </div>
    `,
    data: () => ({items})
}
