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
        'en': {
            'JAN': 'JAN',
            'FEB': 'FEB',
            'MAR': 'MAR',
            'APR': 'APR',
            'MAY': 'MAY',
            'JUN': 'JUN',
            'JUL': 'JUL',
            'AUG': 'AUG',
            'SEP': 'SEP',
            'OCT': 'OCT',
            'NOV': 'NOV',
            'DEC': 'DEC'
        },
        'es': {
            'JAN': 'ENE',
            'FEB': 'FEB',
            'MAR': 'MAR',
            'APR': 'ABR',
            'MAY': 'MAY',
            'JUN': 'JUN',
            'JUL': 'JUL',
            'AUG': 'AGO',
            'SEP': 'SEP',
            'OCT': 'OCT',
            'NOV': 'NOV',
            'DEC': 'DIC'
        }
    };

    const lang = ['en', 'es'].includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'en';
    const date = new Date().toLocaleString('en-UK', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
    }).replaceAll(',', '').toUpperCase();

    const month = date.split(' ')[1];
    const clock = document.getElementById('clock');

    clock.innerText = date.replace(month, multilangMonths[lang][month]);
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

