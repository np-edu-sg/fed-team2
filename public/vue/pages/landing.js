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
        <div class="w-screen h-screen bg-slate-50 sm:p-0 overflow-y-scroll">
            <v-header title="Assignment"></v-header>
            <div class="container mx-auto pt-6 px-3">
                <h1 class="text-4xl">Attractions</h1>
                <div class="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <v-card 
                        v-for="item in items"
                        :src="item.img" 
                        alt="Your image here" 
                        description="Your description here"
                        :title="item.title" 
                        :href="item.href"
                    />
                </div> 
                <h1 class="text-4xl"></h1>
            </div>
        </div>
    `,
    components: [Header, Button],
    data: () => ({items})
}
