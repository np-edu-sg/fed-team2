export const Header = {
    template: `
        <div class="bg-slate-200 fixed top-0 px-3 h-14 w-screen flex items-center">
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
            else if (h.indexOf("/Assignment/public") > -1) return "/Assignment/public"
            return "/"
        }
    }
}
