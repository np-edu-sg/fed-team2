export const Header = {
    template: `
        <div class="bg-slate-200 fixed top-0 h-14 w-screen flex items-center">
            <div class="container mx-auto">
                <span class="text-lg font-bold">{{ title ?? "Assignment" }}</span>
            </div>
        </div>
        <div class="mb-14"></div>
    `,
    props: ['title']
}
