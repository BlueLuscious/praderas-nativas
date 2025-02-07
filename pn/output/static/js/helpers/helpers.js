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
     * Toggle the translate of an element:
     * @param {string} element_id Element ID.
     * @param {string} translate Tailwind Class.
     * @returns {void} None.
     */
    static toggleElementTranslateById(element_id, translate) {
        const element = document.getElementById(element_id)
        element.classList.toggle(translate)
    }

}
