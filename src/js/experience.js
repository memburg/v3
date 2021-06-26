import { experience, navbar } from './language';
import { LANG, LANGUAGES } from './environment';

export default class Experience {
    constructor() {
        this.bar = `<div class="window__close"></div><div class="window__title"><span id="windowTitle"></span></div>`
        this.ui = `<div class="content__experience"><div class="experience__container"><div class="experice__company"> <span id="experienceCompany-1"></span><span id="experienceDate-1"></span></div><div class="experice__role"> <span id="experienceRole-1"></span></div><div class="experice__desc"> <span id="experienceDesc-1"></span></div></div><div class="experience__container"><div class="experice__company"> <span id="experienceCompany-2"></span><span id="experienceDate-2"></span></div><div class="experice__role"> <span id="experienceRole-2"></span></div><div class="experice__desc"> <span id="experienceDesc-2"></span></div></div><div class="experience__container"><div class="experice__company"> <span id="experienceCompany-3"></span><span id="experienceDate-3"></span></div><div class="experice__role"> <span id="experienceRole-3"></span></div><div class="experice__desc"> <span id="experienceDesc-3"></span></div></div></div>`;
    }

    renderUI() {
        document.getElementById('windowBar').innerHTML = this.bar;
        document.getElementById('windowContent').innerHTML = this.ui;
    }

    renderData() {
        document.getElementById('windowTitle').innerHTML = navbar.navbarExperience[LANGUAGES.includes(
            localStorage.getItem('lang')
        ) ? localStorage.getItem('lang') : 'en'];

        for (const k in experience) {
            document.getElementById(k).innerText = experience[k][LANGUAGES.includes(
                localStorage.getItem('lang')
            ) ? localStorage.getItem('lang') : 'en'];
        }
    }
}