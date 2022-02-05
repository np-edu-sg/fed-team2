import {defineCustomElement} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.prod.js"

import {Header} from "./web-components/header.js";

customElements.define("v-header", defineCustomElement(Header))
