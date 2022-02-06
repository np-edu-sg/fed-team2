/**
 * Use Vue components as Web Components
 * Main difference of this compared to ./index.js is that the Tailwind styles for these components are scoped to the shadow DOM.
 * This prevents the component styles from conflicting with the rest of the page using styles from Bootstrap.
 */
import {defineCustomElement} from "https://unpkg.com/vue@3.2.29/dist/vue.esm-browser.prod.js"
import {wc} from "./wc.js";

import {Button, Footer, Header} from "./components/index.js";

customElements.define("v-header", defineCustomElement(wc(Header)))
customElements.define("v-footer", defineCustomElement(wc(Footer)))
customElements.define("v-button", defineCustomElement(wc(Button)))
