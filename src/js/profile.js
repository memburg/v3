import { profile } from './language';

export default class Profile {
    constructor() {
        this.data = profile;
        this.ui = `<div class="content__profile"><div class="profile__wrapper"><div class="profile__photo"> <img src="./static/img/me.png"></div><div class="profile__info--top"><div class="info__line"> <span class="info__line--property" id="profileName"></span> <span id="profileNameContent"></span></div><div class="info__line"> <span class="info__line--property" id="profileLocation"></span> <span id="profileLocationContent"></span></div><div class="info__line"> <span class="info__line--property" id="profileNickname"></span> <span id="profileNicknameContent"></span></div><div class="info__line"> <span class="info__line--property" id="profileWorkingAt"></span> <span id="profileWorkingAtContent"></span></div><div class="info__line"> <span class="info__line--property" id="profileRole"></span> <span id="profileRoleContent"></span></div><div class="info__line"> <span class="info__line--property" id="profileEducation"></span> <span id="profileEducationContent"></span></div></div></div><div class="profile__info--bottom"><div class="info__line"> <span class="info__line--property" id="profileMoreStuff"></span> <span id="profileMoreStuffContent"></span></div></div></div>`;
    }

    renderUI() {
        document.getElementById('windowContent').innerHTML = this.ui;
    }

    renderData(lang) {
        for (const k in this.data) {
            if (k.includes('Content')) {
                document.getElementById(k).innerText = this.data[k][lang].toUpperCase();
            } else {
                document.getElementById(k).innerText = `${this.data[k][lang].toUpperCase()}:`;
            }
        }
    }
}