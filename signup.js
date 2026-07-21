const signUp = document.querySelector('.btn-signup');
const signUpWindow = document.querySelector('.js-sign-up-window');
signUp.addEventListener('click', () => {
    signUpWindow.classList.add('sign-up-window-visible');
});

const signUpWindowJs = document.querySelector('.close-btn');
signUpWindowJs.addEventListener('click', () => {
    signUpWindow.classList.remove('sign-up-window-visible');
});

const logInBtn = document.querySelector('.btn-login'); 
const logInWindow = document.querySelector('.js-login-window');
logInBtn.addEventListener('click', () => {
    logInWindow.classList.add('log-in-window-visible');
});

const logInWindowJs = document.querySelector('.js-login-close');
logInWindowJs.addEventListener('click', () => {
    logInWindow.classList.remove('log-in-window-visible');
});

