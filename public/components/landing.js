import {Header} from "./header.js";
import {Button} from "./button.js";

const items = [
    {
        title: "Resorts World Sentosa",
        href: "qin-guan"
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
        <div class="w-screen h-screen bg-slate-50 px-3 sm:p-0">
            <v-header title="Assignment"></v-header>
            <div class="container mx-auto">
                <div v-for="item in items" class="w-full py-10 flex-1 flex-col">
                    <div class="mb-3">
                        <span class="text-3xl">
                            {{ item.title }}
                        </span>
                    </div>
                    <v-button text="Learn more" :href="item.href"></v-button>
                </div>
            </div>
        </div>
    `,
    components: [Header, Button],
    data: () => ({items})
}
