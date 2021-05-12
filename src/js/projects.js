import { projects, navbar } from './language';

export default class Projects {
    constructor() {
        this.bar = `<div class="window__close"></div><div class="window__title"><span id="windowTitle"></span></div>`
        this.ui = `<div class="content__projects"><div class="project__container"><div class="project__name">CHEEMS LANG <span id="projectLang-1">JAVASCRIPT</span></div><div class="project__repo"><span id="projectRepo-1"><a href="https://github.com/cheems-lang/cheems">GITHUB</a></span></div><div class="project__desc"><span id="projectDesc-1"></span></div></div><div class="project__container"><div class="project__name">DUOLINGO KILLER <span id="projectLang-1">PYTHON</span></div><div class="project__repo"><span id="projectRepo-2"><a href="https://github.com/memburg/duolingo-killer">GITHUB</a></span></div><div class="project__desc"><span id="projectDesc-2"></span></div></div><div class="project__container"><div class="project__name">IMAGE PROCESSING ALGORITHMS <span id="projectLang-1">JAVASCRIPT</span></div><div class="project__repo"><span id="projectRepo-3"><a href="https://github.com/memburg/image-processing-algorithms">GITHUB</a></span></div><div class="project__desc"><span id="projectDesc-3"></span></div></div></div>`;
    }

    renderUI() {
        document.getElementById('windowBar').innerHTML = this.bar;
        document.getElementById('windowContent').innerHTML = this.ui;
    }

    renderData() {
        const lang = ['en', 'es'].includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'en';
        
        document.getElementById('windowTitle').innerHTML = navbar.navbarProjects[lang];

        for (const k in projects) {
            document.getElementById(k).innerText = projects[k][lang];
        }
    }
}