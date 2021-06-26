export default class Bar {
    constructor() {
        this.ui = `<div class="bar__clock"> <span id="clock"></span></div><div class="bar__lang"> <span id="en">EN</span> <span id="es">ES</span> <span id="pt">PT</span></div>`;
        this.languages = {
            en: null,
            es: null,
            pt: null
        };
    }

    setListeners() {
        this.languages.en = document.getElementById('en');
        this.languages.es = document.getElementById('es');
        this.languages.pt = document.getElementById('pt');
    }

    renderUI() {
        document.getElementById('bar').innerHTML = this.ui;
    }
}