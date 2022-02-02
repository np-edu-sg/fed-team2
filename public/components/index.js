import {createApp} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.js"
import "./tailwind.js"

import {Button} from "./button.js";
import {Header} from "./header.js";
import {Landing} from "./landing.js";

const app = (i) => createApp(i).component("v-header", Header).component("v-button", Button)

const header = document.getElementById("header")
if (header) {
    app(Header).mount("#header")
}

const landing = document.getElementById("landing")
if (landing) {
    app(Landing).mount("#landing")
}
