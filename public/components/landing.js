import {Header} from "./header.js";
import {Button} from "./button.js";

const items = [
    {
        title: "Resorts World Sentosa",
        href: "qin-guan",
        img: "qin-guan/images/globe.jpg"
    },
    {
        title: "Gardens by the Bay",
        href: "farrell"
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
        <div class="w-screen h-screen bg-slate-50 px-3 sm:p-0 overflow-y-scroll">
            <v-header title="Assignment"></v-header>
            <div class="container mx-auto h-full">
                <div v-for="item in items" class="w-full py-10 flex-1 flex-col">
                    <v-card 
                        :src="item.img" 
                        alt="Your image here" 
                        description="Your description here"
                        :title="item.title" 
                        :href="item.href"
                    >
                    </v-card>
                </div>
            </div>
        </div>
    `,
    components: [Header, Button],
    data: () => ({items})
}
