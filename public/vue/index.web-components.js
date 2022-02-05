import {defineCustomElement} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.prod.js"
import {wc} from "./wc.js";

import {Footer, Header, Button} from "./components/index.js";

customElements.define("v-header", defineCustomElement(wc(Header)))
customElements.define("v-footer", defineCustomElement(wc(Footer)))
customElements.define("v-button", defineCustomElement(wc(Button)))
