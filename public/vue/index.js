import {createApp} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.prod.js"
import "./tailwind.js"

import {Landing} from "./pages/landing.js";
import {QinGuan} from "./pages/qin-guan/index.js";
import {Credits} from "./pages/credits.js";

import {Button, Card, Footer, Header, Input, Label, Select} from "./components/index.js";

tailwind.config = {
    darkMode: 'class',
    theme: {
        fontFamily: {
            'display': ['Poppins'],
            'body': ['IBM Plex Sans']
        }
    }
}

const app = (i) => createApp(i)
    .component("v-header", Header)
    .component("v-footer", Footer)
    .component("v-button", Button)
    .component('v-card', Card)
    .component('v-select', Select)
    .component('v-input', Input)
    .component('v-label', Label)

const header = document.getElementById("header")
if (header) {
    app(Header).mount("#header")
}

const footer = document.getElementById("footer")
if (footer) {
    app(Footer).mount("#footer")
}

const landing = document.getElementById("landing")
if (landing) {
    app(Landing).mount("#landing")
}

const credits = document.getElementById("credits")
if (credits) {
    app(Credits).mount("#credits")
}

const qinguan = document.getElementById("qin-guan")
if (qinguan) {
    app(QinGuan).mount("#qin-guan")
}
