import { Helpers } from "./helpers/helpers.js"

window.openSideNavbar = Helpers.openSideNavbar


document.addEventListener("DOMContentLoaded", () => {

    const navItems = Array.from(document.getElementsByClassName("nav_item"))
    Helpers.activeNavItem(
        navItems,
        ["bg-primary-red_tone_3", "text-white", ],
        ["bg-white", "text-primary-red_tone_3", ]
    )

})
