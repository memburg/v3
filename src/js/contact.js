import { contact, navbar } from './language';
import { LANG, LANGUAGES } from './environment';

export default class Contact {
    constructor() {
        this.bar = `<div class="window__close"></div><div class="window__title"><span id="windowTitle"></span></div>`
        this.ui = `<div class="content__contact"><div class="contact__info--top"><div class="info__line"> <span class="info__line--property" id="contactMail"></span> <span id="contactMailContent"></span></div><div class="info__line"> <span class="info__line--property" id="contactGitHub"></span> <span id="contactGitHubContent"></span></div><div class="info__line"> <span class="info__line--property" id="contactGitLab"></span> <span id="contactGitLabContent"></span></div><div class="info__line"> <span class="info__line--property" id="contactLinkedIn"></span> <span id="contactLinkedInContent"></span></div><div class="info__line"> <span class="info__line--property" id="contactTwitter"></span> <span id="contactTwitterContent"></span></div></div></div>`;
    }

    renderUI() {
        document.getElementById('windowBar').innerHTML = this.bar;
        document.getElementById('windowContent').innerHTML = this.ui;
    }

    renderData() {
        document.getElementById('windowTitle').innerHTML = navbar.navbarContact[LANGUAGES.includes(
            localStorage.getItem('lang')
        ) ? localStorage.getItem('lang') : 'en'];

        for (const k in contact) {
            document.getElementById(k).innerText = contact[k][LANGUAGES.includes(
                localStorage.getItem('lang')
            ) ? localStorage.getItem('lang') : 'en'];
        }
    }
}