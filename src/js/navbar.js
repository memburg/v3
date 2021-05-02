import { navbar } from './language';

export default class Navbar {
    constructor() {
        this.data = navbar;
        this.ui = `<div class="window__option"> <span id="navbarProfile"></span></div><div class="window__option"> <span id="navbarExperience"></span></div><div class="window__option"> <span id="navbarProjects"></span></div><div class="window__option"> <span id="navbarContact"></span></div>`;
    }

    renderUI() {
        document.getElementById('navbarOptions').innerHTML = this.ui;
    }

    renderData(lang) {
        for (const k in this.data) {
            document.getElementById(k).innerText = this.data[k][lang].toUpperCase();
        }
    }
}