const links = [
    "your references here",
    "your references here",
    "your references here",
    "your references here",
    "your references here",
    "your references here",
    "your references here",
]

export const Credits = {
    template: `
        <div class="w-screen h-screen flex flex-col">
            <v-header></v-header>
            <div class="container mx-auto flex-1">
                <div class="p-3 border-b-2 border-slate-200" v-for="link in links">
                    <a :href="link" class="link hover:underline text-slate-500 hover:text-slate-900">{{ link }}</a>
                </div>
            </div>
            <v-footer></v-footer>
        </div>
    `,
    computed: {
        links: () => links
    }
}
