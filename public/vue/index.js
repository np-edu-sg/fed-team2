import {createApp} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.js"
import "./tailwind.js"

tailwind.config = {
    darkMode: 'class',
}

import {Button} from "./components/button.js";
import {Header} from "./components/header.js";
import {Footer} from "./components/footer.js";
import {Card} from "./components/card.js";

import {Landing} from "./pages/landing.js";
import {QinGuan} from "./pages/qin-guan.js";

const app = (i) => createApp(i).component("v-header", Header).component("v-footer", Footer).component("v-button", Button).component('v-card', Card)

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

const qinguan = document.getElementById("qin-guan")
if (qinguan) {
    app(QinGuan).mount("#qin-guan")
}
