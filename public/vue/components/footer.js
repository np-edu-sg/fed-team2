export const Footer = {
    template: `
        <footer class="p-4 rounded-tl-lg rounded-tr-lg shadow md:flex md:items-center md:justify-end md:p-6 bg-gray-800">
            <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
                <li v-for="item in items">
                    <a :href="item.href" class="mr-4 text-sm hover:underline md:mr-6 text-gray-400">{{ item.title }}</a>
                </li>
            </ul>
        </footer>
    `,
    computed: {
        items: () => {
            let prefix = "/"
            const h = window.location.href;
            if (h.indexOf("https://ngeeannpoly.gitlab.io") > -1) {
                prefix = "https://ngeeannpoly.gitlab.io/fed/team2"
            } else if (h.indexOf("/public") > -1) {
                prefix = h.split("/public")[0] + "/public"
            }

            return [
                {
                    title: "Resorts World Sentosa",
                    href: prefix + "/qin-guan",
                },
                {
                    title: "Gardens by the Bay",
                    href: prefix + "/farrell",
                },
                {
                    title: "Marina Bay Sands",
                    href: prefix + "/ryan"
                },
                {
                    title: "Art Science Museum",
                    href: prefix + "/yun-e"
                },
                {
                    title: "Wild Wild Wet",
                    href: prefix + "/richard"
                },
                {
                    title: "Credits",
                    href: prefix + "/credits.html"
                }
            ]
        }
    }
}
