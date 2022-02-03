const links = {
    "Farrell": ["i am a reference", "i am a reference"],
    "Qin Guan": ["i am a reference"],
    "Yun-E": ["i am a reference"],
    "Richard": ["i am a reference"],
    "Ryan": ["i am a reference"],
}

export const Credits = {
    template: `
        <div class="w-screen h-screen flex flex-col">
            <v-header></v-header>
            <div class="container mx-auto flex-1">
                <div class="justify-start p-3 border-b-2 border-slate-200" v-for="(value, key) in links">
                    <h1 class="text-2xl mb-3">{{ key }}</h1>
                    <ul>
                        <li v-for="link in value">
                            <a :href="link" class="link hover:underline text-slate-500 hover:text-slate-900">{{ link }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <v-footer></v-footer>
        </div>
    `,
    computed: {
        links: () => links
    }
}
