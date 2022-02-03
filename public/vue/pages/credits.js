const links = {
    "Farrell": [
        "http://www.wayofbackpacker.com/2015/01/%E0%B8%9E%E0%B8%B2%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7-gardens-bay-singapore/", "https://www.singaporeflowersflorists.com/2020/04/flower-dome-in-singapore-at-gardens-by-the-bay.html", "https://matadornetwork.com/read/singapore-gardens-by-the-bay/", "https://girlstyle.com/sg/article/78396/floral-fantasy-gardens-by-the-bay", "https://inspitrip.com/vi-VN/experiences/combo-marina-gardens-by-the-bay-marina-bay-sands-skypark-artscience-museum-1131", "https://thesmartlocal.com/read/things-to-do-january-2020/", "https://www.isango.com/theguidebook/visiting-gardens-bay/", "https://www.personaldreamer.com/it/articolo/al-gardens-by-the-bay-di-singapore-tra-giardini-mirabolanti-e-alberi-giganti", "https://www.pinterest.com/pin/236368680413505608/"],
    "Qin Guan": ["i am a reference"],
    "Yun-E": ["i am a reference"],
    "Richard": ["i am a reference"],
    "Ryan": ["i am a reference"],
}

export const Credits = {
    template: `
        <div class="flex flex-col w-screen h-screen">
            <v-header></v-header>
            <div class="container flex-1 mx-auto">
                <div class="justify-start p-3 border-b-2 border-slate-200" v-for="(value, key) in links">
                    <h1 class="mb-3 text-2xl">{{ key }}</h1>
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
