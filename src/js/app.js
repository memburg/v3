import Bar from './bar'
import Navbar from './navbar';
import Profile from './profile';
import Experience from "./experience";
import Projects from './projects';
import Contact from './contact';

const bar = new Bar();
const navbar = new Navbar();
const profile = new Profile();
const experience = new Experience();
const projects = new Projects();
const contact = new Contact();

// First render UI
bar.renderUI();
navbar.renderUI();
profile.renderUI();

navbar.renderData();
profile.renderData();

setInterval(() => {
    const multilangMonths = {
        'en': ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        'es': ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']
    };

    const lang = ['en', 'es'].includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'en';
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    clock.innerText = `${day} ${multilangMonths[lang][month]} ${hours}:${minutes}`;
}, 1000);

// Set event listeners
navbar.setListeners();
navbar.tabs.profile.addEventListener('click', () => {
    profile.renderUI();
    profile.renderData();
});

navbar.tabs.experience.addEventListener('click', () => {
    experience.renderUI();
    experience.renderData();
});

navbar.tabs.projects.addEventListener('click', () => {
    projects.renderUI();
    projects.renderData();
});

navbar.tabs.contact.addEventListener('click', () => {
    contact.renderUI();
    contact.renderData();
});

