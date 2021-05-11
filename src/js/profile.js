import { profile, navbar } from './language';

export default class Profile {
    constructor() {
        this.bar = `<div class="window__close"></div><div class="window__title"><span id="windowTitle"></span></div>`
        this.ui = `<div class="content__profile"><div class="profile__info--top"><div class="info__line"> <span class="info__line--property" id="profileName"></span> <span id="profileNameContent"></span></div><div class="info__line"> <span class="info__line--property" id="profileNickname"></span> <span id="profileNicknameContent"></span></div><div class="info__line"> <span class="info__line--property" id="profileEducation"></span> <span id="profileEducationContent"></span></div><div class="info__line"> <span class="info__line--property" id="profileLocation"></span> <span id="profileLocationContent"></span></div><div class="info__line"> <span class="info__line--property" id="profileMoreStuff"></span> <span id="profileMoreStuffContent"></span></div></div></div>`;
    }

    renderUI() {
        document.getElementById('windowBar').innerHTML = this.bar;
        document.getElementById('windowContent').innerHTML = this.ui;
    }

    renderData() {
        const lang = ['en', 'es'].includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'en';

        document.getElementById('windowTitle').innerHTML = navbar.navbarProfile[lang];

        for (const k in profile) {
            document.getElementById(k).innerText = profile[k][lang];
        }
    }
}