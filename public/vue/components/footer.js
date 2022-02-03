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
    computed: {items: () => items}
}
