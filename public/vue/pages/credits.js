const links = {
    "Farrell": [
        "http://www.wayofbackpacker.com/2015/01/%E0%B8%9E%E0%B8%B2%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7-gardens-bay-singapore/", "https://www.singaporeflowersflorists.com/2020/04/flower-dome-in-singapore-at-gardens-by-the-bay.html", "https://matadornetwork.com/read/singapore-gardens-by-the-bay/", "https://girlstyle.com/sg/article/78396/floral-fantasy-gardens-by-the-bay", "https://inspitrip.com/vi-VN/experiences/combo-marina-gardens-by-the-bay-marina-bay-sands-skypark-artscience-museum-1131", "https://thesmartlocal.com/read/things-to-do-january-2020/", "https://www.isango.com/theguidebook/visiting-gardens-bay/", "https://www.personaldreamer.com/it/articolo/al-gardens-by-the-bay-di-singapore-tra-giardini-mirabolanti-e-alberi-giganti", "https://www.pinterest.com/pin/236368680413505608/"],
    "Qin Guan": ["i am a reference"],
    "Yun-E": ["i am a reference"],
    "Richard": ["i am a reference"],
    "Ryan": ["https://www.tripadvisor.com/Hotel_Review-g294265-d1770798-Reviews-Marina_Bay_Sands-Singapore.html",
"https://www.visitsingapore.com/see-do-singapore/recreation-leisure/resorts/marina-bay-sands",
"https://www.cntraveler.com/activities/singapore/marina-bay-sands-skypark",
"https://www.booking.com/hotel/sg/marina-bay-sands.html",
"https://www.safdiearchitects.com/projects/marina-bay-sands-hotel-and-skypark",
"https://en.wikipedia.org/wiki/Marina_Bay_Sands#/media/File:Marina_Bay_Sands_logo.svg",
"https://www.marinabaysands.com/booking/rooms.html?CheckinDate=2022-02-01&LOS=1&Rooms=1&Adults_1=1&Children_1=0&locale=en&offerCode=&flow=tf&Currency=SGD&multi=false",
"https://www.marinabaysands.com/shopping.html",
"https://www.gardensbythebay.com.sg/"],
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
