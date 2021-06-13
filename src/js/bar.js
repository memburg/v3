export default class Bar {
    constructor() {
        this.ui = `<div class="bar__clock"> <span id="clock"></span></div><div class="bar__lang"> <span id="en">EN</span> <span id="es">ES</span></div>`;
    }

    renderUI() {
        document.getElementById('bar').innerHTML = this.ui;
    }
}