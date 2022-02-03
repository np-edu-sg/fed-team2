import {Header} from "../components/header.js";
import {Button} from "../components/button.js";

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
        href: "ryan"
    },
    {
        title: "Art Science Museum",
        href: "yun-e"
    },
    {
        title: "Wild Wild Wet",
        href: "richard"
    },
]

export const Landing = {
    template: `
        <div class="flex flex-col w-screen h-screen bg-slate-50">
            <v-header></v-header>
            <div class="container flex-1 px-3 sm:px-0 pt-6 pb-6 mx-auto">
                <h1 class="text-4xl font-medium font-display">Attractions</h1>
<!--                <div class="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">-->
<!--                    <v-card -->
<!--                        v-for="item in items"-->
<!--                        :src="item.img" -->
<!--                        alt="Your image here" -->
<!--                        description="Your description here"-->
<!--                        :title="item.title" -->
<!--                        :href="item.href"-->
<!--                    />-->
<!--                </div> -->
            </div>
            <v-footer></v-footer>
        </div>
    `,
    components: [Header, Button],
    computed: {items: () => items}
}
