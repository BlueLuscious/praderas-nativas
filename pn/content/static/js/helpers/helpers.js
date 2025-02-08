export class Helpers {
   
    /**
     * Open/Hide Navbar By Click Event:
     * @param {string} element_id Element ID.
     * @param {string} background_id Background element ID.
     * @param {string} classlist Classlist.
     * @returns {void} None.
     */
    static openSideNavbar(element_id, background_id, classlist) {
        const element = document.getElementById(element_id)
        const background = document.getElementById(background_id)
        element.classList.toggle(classlist)
        background.classList.toggle(classlist)
    }

    /**
     * Set Tailwind to Nav Items:
     * @param {Element[]} nav_items Nav Items List (Must have `data-path` attr.).
     * @param {string[]} active_item_classlist Active Item Classes.
     * @param {string[]} inactive_item_classlist Inactive Item Classes.
     * @returns {void} None.
     */
    static activeNavItem(nav_items, active_item_classlist, inactive_item_classlist) {
        nav_items.forEach(item => {
            const itemPath = item.getAttribute("data-path")
            if (location.pathname == itemPath) {
                item.classList.add(...active_item_classlist)
            } else {
                item.classList.add(...inactive_item_classlist)
            }
        })
    }

}
