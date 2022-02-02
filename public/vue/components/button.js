export const Button = {
    template: `
        <div>
            <a v-bind:href="href">
                <button class="px-3 py-2 hover:scale-110 rounded-md hover:rounded-lg flex-1 items-center content-center bg-slate-300 ease-out duration-200">
                    {{ text }}
                </button>
            </a>
        </div>
    `,
    props: ['text', 'href']
}
