import Navbar from './navbar';
import Profile from './profile';

const navbar = new Navbar();
const profile = new Profile();

// First render UI
navbar.renderUI();
profile.renderUI();

// Then render data based on selected language
switch (localStorage.getItem('lang')) {
    case 'en':
        navbar.renderData('en');
        profile.renderData('en');
        break;
    case 'es':
        navbar.renderData('es');
        profile.renderData('es');
        break;
    default:
        navbar.renderData('en');
        profile.renderData('en');
        break;
}