import { create, cssomSheet } from "https://cdn.skypack.dev/twind"

const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({ sheet })

export class Page extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.adoptedStyleSheets = [sheet.target]

        shadow.innerHTML = `
            <header class="${tw`p-3`}">
                This is a shared header!
            </header>
            <slot></slot>
        `
    }
}
