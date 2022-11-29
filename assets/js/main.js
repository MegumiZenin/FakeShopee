var modal = document.querySelector('.modal');
var quitBtn = document.querySelectorAll('.js-quit-btn')
var registerForm = document.querySelector('.js-register');
var loginForm = document.querySelector('.js-login');
var registerBtn = document.querySelector('.js-register-btn');
var loginBtn = document.querySelector('.js-login-btn');
var switchBtn = document.querySelectorAll('.js-switch-btn')

registerBtn.addEventListener('click', function() {
    registerForm.classList.remove('hidden');
    modal.classList.add('open');
});

loginBtn.addEventListener('click', function() {
    loginForm.classList.remove('hidden');
    modal.classList.add('open');
});

for (var i = 0; i < switchBtn.length; ++i) {
    switchBtn[i].addEventListener('click', function() {
        loginForm.classList.toggle('hidden');
        registerForm.classList.toggle('hidden');
    })
};

for (var i = 0; i < quitBtn.length; ++i) {
    quitBtn[i].addEventListener('click', function() {
        modal.classList.remove('open');
        loginForm.classList.add('hidden');
        registerForm.classList.add('hidden');
    })
};