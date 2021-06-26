/**
 * Environment variables (Local Storage)
 */
export const LANG = localStorage.getItem('lang') || (() => {
    localStorage.setItem('lang', 'en');
    return 'en';
})();

export const LANGUAGES = ['en', 'es', 'pt'];
export const SCREENS = ['profile', 'experience', 'projects', 'contact'];