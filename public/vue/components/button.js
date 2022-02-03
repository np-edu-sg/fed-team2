export const Button = {
    template: `
        <div>
            <a v-bind:href="href">
                <button class="flex-1 content-center items-center px-3 py-2 rounded-md duration-200 ease-out hover:scale-110 hover:rounded-lg bg-slate-300">
                    {{ text }}
                </button>
            </a>
        </div>
    `,
    props: ['text', 'href']
}
