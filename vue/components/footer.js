import {computed, onBeforeUnmount, onMounted, ref} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.prod.js"

export const Footer = {
    //language=HTML
    template: `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet">
        <footer class="p-4 bg-gray-800 shadow-lg md:flex md:items-center md:justify-end md:p-6 font-body">
            <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
                <li v-for="item in items">
                    <a :href="item.href" class="mr-4 text-sm text-gray-400 hover:underline md:mr-6">{{ item.title }}</a>
                </li>
            </ul>
        </footer>
    `,
    setup() {
        const href = computed(() => {
            const h = window.location.href;
            if (h.indexOf("https://ngeeannpoly.gitlab.io") > -1) return "https://ngeeannpoly.gitlab.io/fed/team2/"
            if (h.indexOf("/Assignment") > -1) return h.split("/Assignment")[0] + "/Assignment/"
            if (h.indexOf("/public") > -1) return h.split("/public")[0] + "/public/"
            return "/"
        })
        const items = computed(() => {
            return [
                {
                    title: "Resorts World Sentosa",
                    href: href.value + "qin-guan",
                },
                {
                    title: "Gardens by the Bay",
                    href: href.value + "farrell",
                },
                {
                    title: "Marina Bay Sands",
                    href: href.value + "ryan"
                },
                {
                    title: "Art Science Museum",
                    href: href.value + "yun-e"
                },
                {
                    title: "Wild Wild Wet",
                    href: href.value + "richard"
                },
                {
                    title: "Credits",
                    href: href.value + "credits.html"
                }
            ]
        })

        return {items}
    }
}
