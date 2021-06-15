export default class Bar {
    constructor() {
        this.ui = `<div class="bar__clock"> <span id="clock"></span></div><div class="bar__lang"> <span id="en">EN</span> <span id="es">ES</span></div>`;
        this.languages = {
            en: null,
            es: null
        };
    }

    setListeners() {
        this.languages.en = document.getElementById('en');
        this.languages.es = document.getElementById('es');
    }

    renderUI() {
        document.getElementById('bar').innerHTML = this.ui;
    }
}