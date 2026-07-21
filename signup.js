const signUp = document.querySelector('.btn-signup');
const signUpWindow = document.querySelector('.js-sign-up-window');
signUp.addEventListener('click', () => {
    signUpWindow.classList.add('sign-up-window-visible');
});

const signUpWindowJs = document.querySelector('.close-btn');
signUpWindowJs.addEventListener('click', () => {
    signUpWindow.classList.remove('sign-up-window-visible');
});