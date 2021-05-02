import { navbar } from './language';

export default class Navbar {
    constructor() {
        this.data = navbar;
    }

    renderData(lang) {
        for (const k in this.data) {
            document.getElementById(k).innerText = this.data[k][lang].toUpperCase();
        }
    }
}