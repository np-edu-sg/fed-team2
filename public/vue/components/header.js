import {computed, ref} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.prod.js"

export const Header = {
    //language=HTML
    template: `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet">
        <div :class="'fixed top-0 z-10 px-3 w-full shadow-md bg-slate-200 duration-200 font-body ' + (expanded ? 'h-96' : 'h-16')">
            <div class="container mx-auto flex justify-between items-center mt-2">
                <a :href="href">
                    <span class="text-lg font-bold hover:underline">{{ title ?? "Assignment" }}</span>
                </a>

                <v-button color="alternative" @click="expanded = !expanded" class="bg-transparent mr-0 p-1!">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                         width="24px"
                         fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path v-if="expanded"
                              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        <path v-else d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </v-button>
            </div>

            <div v-if="expanded" class="overflow-hidden divide-y divide-slate-600">
                <div v-for="item in items" class="py-3">
                    <a :href="item.href" class="hover:underline">
                        {{ item.title }}
                    </a>
                </div>
            </div>
        </div>
        <div :class="expanded ? 'mb-96' : 'mb-16'"></div>
    `,
    props: ['title'],
    setup() {
        const expanded = ref(false)
        const href = computed(() => {
            const h = window.location.href;
            if (h.indexOf("https://ngeeannpoly.gitlab.io") > -1) return "https://ngeeannpoly.gitlab.io/fed/team2"
            // Hacky, oh no
            else if (h.indexOf("/public") > -1) return h.split("/public")[0] + "/public"
            return "/"
        })

        return {
            href,
            expanded
        }
    },
    computed: {
        items: () => {
            let prefix = "/"
            const h = window.location.href;
            if (h.indexOf("https://ngeeannpoly.gitlab.io") > -1) {
                prefix = "https://ngeeannpoly.gitlab.io/fed/team2/"
            } else if (h.indexOf("/public") > -1) {
                prefix = h.split("/public")[0] + "/public/"
            }

            return [
                {
                    title: "Resorts World Sentosa",
                    href: prefix + "qin-guan",
                },
                {
                    title: "Gardens by the Bay",
                    href: prefix + "farrell",
                },
                {
                    title: "Marina Bay Sands",
                    href: prefix + "ryan"
                },
                {
                    title: "Art Science Museum",
                    href: prefix + "yun-e"
                },
                {
                    title: "Wild Wild Wet",
                    href: prefix + "richard"
                },
                {
                    title: "Credits",
                    href: prefix + "credits.html"
                }
            ]
        }
    }
}
