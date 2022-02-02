import {createApp} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.js"
import "./tailwind.js"

tailwind.config = {
    darkMode: 'class',
}

import {Button} from "./components/button.js";
import {Header} from "./components/header.js";
import {Card} from "./components/card.js";

import {Landing} from "./pages/landing.js";

const app = (i) => createApp(i).component("v-header", Header).component("v-button", Button).component('v-card', Card)

const header = document.getElementById("header")
if (header) {
    app(Header).mount("#header")
}

const landing = document.getElementById("landing")
if (landing) {
    app(Landing).mount("#landing")
}
