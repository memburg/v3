import Profile from './profile';
import Navbar from './navbar';

const profile = new Profile();
const navbar = new Navbar();

switch (localStorage.getItem('lang')) {
    case 'en':
        profile.renderData('en');
        navbar.renderData('en');
        break;
    case 'es':
        profile.renderData('es');
        navbar.renderData('es');
        break;
    default:
        profile.renderData('en');
        break;
}