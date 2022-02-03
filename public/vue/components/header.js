export const Header = {
    template: `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet">
        <div class="flex fixed top-0 z-10 items-center px-3 w-screen h-14 rounded-br-lg rounded-bl-lg bg-slate-200 font-body">
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
