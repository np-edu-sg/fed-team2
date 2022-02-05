const links = {
    "Farrell": [
        "http://www.wayofbackpacker.com/2015/01/%E0%B8%9E%E0%B8%B2%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7-gardens-bay-singapore/", "https://www.singaporeflowersflorists.com/2020/04/flower-dome-in-singapore-at-gardens-by-the-bay.html", "https://matadornetwork.com/read/singapore-gardens-by-the-bay/", "https://girlstyle.com/sg/article/78396/floral-fantasy-gardens-by-the-bay", "https://inspitrip.com/vi-VN/experiences/combo-marina-gardens-by-the-bay-marina-bay-sands-skypark-artscience-museum-1131", "https://thesmartlocal.com/read/things-to-do-january-2020/", "https://www.isango.com/theguidebook/visiting-gardens-bay/", "https://www.personaldreamer.com/it/articolo/al-gardens-by-the-bay-di-singapore-tra-giardini-mirabolanti-e-alberi-giganti", "https://www.pinterest.com/pin/236368680413505608/"],
    "Qin Guan": ["i am a reference"],
    "Yun-E": [
        "https://i2.wp.com/www.agoda.com/wp-content/uploads/2019/07/ArtSciene-Museum-ArtScience-Museum-building.jpg" ,
        "https://www.marinabaysands.com/museum/ticket.html",
        "https://www.marinabaysands.com/content/dam/revamp/ASMrevamp/FutureWorld/spirits_of_the_flowers_broccolini_566x346.jpg",
        "https://www.marinabaysands.com/content/dam/revamp/ASMrevamp/radical-curiosity/radical-curiosities-600x368.jpg",
        "https://www.marinabaysands.com/content/dam/revamp/ASMrevamp/Hope-from-Chaos/Hope-From-Chaos-mobileMasthead-600x368.jpg",
        "https://www.marinabaysands.com/content/dam/revamp/ASMrevamp/attack-on-titan/Attack-on-Titan_600x368.jpg"],
    "Richard": ["i am a reference"],
    "Ryan": ["i am a reference"],
}

export const Credits = {
    //language=HTML
    template: `
        <div class="flex flex-col w-screen h-screen">
            <v-header></v-header>
            <div class="flex-1">
                <div class="container mx-auto">
                    <div class="justify-start py-6 border-b-2 border-slate-200 break-all" v-for="(value, key) in links">
                        <h1 class="mb-3 text-2xl font-display font-semibold">{{ key }}</h1>
                        <ul>
                            <li v-for="link in value">
                                <a :href="link"
                                   class="link hover:underline text-slate-500 hover:text-slate-900 font-body">
                                    {{ link }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <v-footer></v-footer>
        </div>
    `,
    data: () => ({links})
}
