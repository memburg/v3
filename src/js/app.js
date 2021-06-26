import Bar from './bar'
import Navbar from './navbar';
import Profile from './profile';
import Experience from "./experience";
import Projects from './projects';
import Contact from './contact';
import { multilangMonths } from './language';
import { LANGUAGES, SCREENS } from './environment';

/**
 * Sections and components
 */
const bar = new Bar();
const navbar = new Navbar();
const profile = new Profile();
const experience = new Experience();
const projects = new Projects();
const contact = new Contact();

/**
 * Enviroment variables (local storage)
 */
if (localStorage.getItem('lang') === null || !LANGUAGES.includes(localStorage.getItem('lang'))) {
    localStorage.setItem('lang', 'en');
}

if (localStorage.getItem('screen') === null || !SCREENS.includes(localStorage.getItem('screen'))) {
    localStorage.setItem('screen', 'profile');
}

/**
 * Render UI and data
 */
bar.renderUI();
navbar.renderUI();
navbar.renderData();

// Render screen saved in LS
renderScreen();

/**
 * Set clock interval
 */
setInterval(() => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const clock = document.getElementById('clock');
    clock.innerText = `${day} ${multilangMonths[LANGUAGES.includes(
        localStorage.getItem('lang')
    ) ? localStorage.getItem('lang') : 'en'][month]} ${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
}, 500);

/**
 * Set event listeners
 */
bar.setListeners();
navbar.setListeners();

navbar.tabs.profile.addEventListener('click', () => {
    profile.renderUI();
    profile.renderData();
    localStorage.setItem('screen', 'profile');
});

navbar.tabs.experience.addEventListener('click', () => {
    experience.renderUI();
    experience.renderData();
    localStorage.setItem('screen', 'experience');
});

navbar.tabs.projects.addEventListener('click', () => {
    projects.renderUI();
    projects.renderData();
    localStorage.setItem('screen', 'projects');
});

navbar.tabs.contact.addEventListener('click', () => {
    contact.renderUI();
    contact.renderData();
    localStorage.setItem('screen', 'contact');
});

bar.languages.en.addEventListener('click', () => {
    localStorage.setItem('lang', 'en');
    navbar.renderData();
    renderScreen();
});

bar.languages.es.addEventListener('click', () => {
    localStorage.setItem('lang', 'es');
    navbar.renderData();
    renderScreen();
});

bar.languages.pt.addEventListener('click', () => {
    localStorage.setItem('lang', 'pt');
    navbar.renderData();
    renderScreen();
});

function renderScreen() {
    switch (localStorage.getItem('screen')) {
        case 'profile':
            profile.renderUI();
            profile.renderData();
            break;

        case 'experience':
            experience.renderUI();
            experience.renderData();
            break;

        case 'projects':
            projects.renderUI();
            projects.renderData();
            break;

        case 'contact':
            contact.renderUI();
            contact.renderData();
            break;
    }
}