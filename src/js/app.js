import Navbar from './navbar';
import Profile from './profile';
import Experience from "./experience";

const navbar = new Navbar();
const profile = new Profile();
const experience = new Experience();

// First render UI
navbar.renderUI();
profile.renderUI();

navbar.renderData();
profile.renderData();

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
    profile.renderUI();
});

navbar.tabs.contact.addEventListener('click', () => {
    profile.renderUI();
});

// Then render data based on selected language
// switch (localStorage.getItem('lang')) {
//     case 'en':
//         navbar.renderData('en');
//         experience.renderData('en')
//         profile.renderData('en');
//         break;
//     case 'es':
//         navbar.renderData('es');
//         experience.renderData('es')
//         profile.renderData('es');
//         break;
//     default:
//         navbar.renderData('en');
//         experience.renderData('en')
//         profile.renderData('en');
//         break;
// }