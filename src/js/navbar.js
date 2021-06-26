import { navbar } from './language';
import { LANGUAGES } from './environment';

export default class Navbar {
    constructor() {
        this.data = navbar;
        this.ui = `<div class="window__option"> <span id="navbarProfile"></span></div><div class="window__option"> <span id="navbarExperience"></span></div><div class="window__option"> <span id="navbarProjects"></span></div><div class="window__option"> <span id="navbarContact"></span></div>`;
        this.tabs = {
            profile: null,
            experience: null,
            projects: null,
            contact: null
        }
    }

    renderUI() {
        document.getElementById('navbarOptions').innerHTML = this.ui;
    }

    setListeners() {
        this.tabs.profile = document.getElementById('navbarProfile');
        this.tabs.contact = document.getElementById('navbarContact');
        this.tabs.projects = document.getElementById('navbarProjects');
        this.tabs.experience = document.getElementById('navbarExperience');
    }

    renderData() {
        for (const k in this.data) {
            document.getElementById(k).innerText = this.data[k][LANGUAGES.includes(
                localStorage.getItem('lang')
            ) ? localStorage.getItem('lang') : 'en'];
        }
    }
}