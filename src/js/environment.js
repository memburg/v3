/**
 * Environment variables (Local Storage)
 */
export const LANG = localStorage.getItem('lang') || (() => {
    localStorage.setItem('lang', 'en');
    return 'en';
})();

export const SCREEN = localStorage.getItem('screen') || (() => {
    localStorage.setItem('screen', 'portfolio');
    return 'portfolio';
})();