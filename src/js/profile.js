import { profile } from './language';

export default class Profile {
    constructor() {
        this.data = profile;
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