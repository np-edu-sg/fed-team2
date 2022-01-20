export class Page extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: "closed"})
        shadowRoot.appendChild(`
        <navbar>
        Fancy Attractions
        </navbar>
        `)
    }
}
