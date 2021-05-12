import Navbar from './navbar';
import Profile from './profile';
import Experience from "./experience";
import Projects from './projects';

const navbar = new Navbar();
const profile = new Profile();
const experience = new Experience();
const projects = new Projects();

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
    projects.renderUI();
    projects.renderData();
});

navbar.tabs.contact.addEventListener('click', () => {
    projects.renderUI();
    projects.renderData();
});