export const Header = {
    template: `
        <div class="flex fixed top-0 z-10 items-center px-3 w-screen h-14 rounded-br-lg rounded-bl-lg bg-slate-200">
            <div class="container mx-auto">
                <a :href="href">
                    <span class="text-lg font-bold">{{ title ?? "Assignment" }}</span>
                </a>
            </div>
        </div>
        <div class="mb-14"></div>
    `,
    props: ['title'],
    computed: {
        href: () => {
            const h = window.location.href;
            if (h.indexOf("https://ngeeannpoly.gitlab.io") > -1) return "https://ngeeannpoly.gitlab.io/fed/team2"
            // Hacky, oh no
            else if (h.indexOf("/public") > -1) return h.split("/public")[0] + "/public"
            return "/"
        }
    }
}
