import {disabledFormButton, completed} from './index.js'


let signUpForm = document.forms['sign-up'];
let formInputs = document.querySelectorAll('.js-input');
let newUserEmail = signUpForm.elements['new-email'];
let newUserPassword = signUpForm.elements['new-password'];
let confirmPassword = signUpForm.elements['confirm-password']
let signUPButton = signUpForm.elements['sign-up-button'];


window.appUser = [
    {
        email: 'alexey@gmail.com',
        password: '111111'
    }
];

signUpForm.addEventListener('input', function(){
  disabledFormButton(this, signUPButton)  
});

newUserEmail.addEventListener('change', function(){
    formInputs(this, '.new-email')
});

newUserPassword.addEventListener('change', function(){
    formInputs(this, '.new-password')
});

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());    
};

function userDataValid (){
    if(signUpForm.checkValidity()){
        signUPButton.disabled = false
    }else {
        signUPButton.disabled = true
    }
}

function isUserEmail(email){
    let userEmail =email.value;
    if(Boolean(window.appUsers.find(user => user.email === userEmail))){
        return true
    }
}

function isSignUserPassword(email, password){
    if(isUserEmail(email) === true){
        let userPassword = password.value;
        return Boolean(window.appUsers.find(user => user.password === userPassword))
    }
}



signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();    
    let warning = document.querySelector('.warning-email');
    let warningpass = document.querySelector('.warning-pass');
    let emailVal = newUserEmail.value;   
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    if(isUserEmail(newUserEmail) === false){
        warning.innerHTML ='This user exists';
    }else {
        if(isSignUserPassword(newUserEmail, newUserPassword) === true){
            completed()
        } else {
            warning.innerHTML ='Repeat input'
        }
    }
    // не работает функция проверки повторного пароля
    function checkConfirmPassword() {
        if(newUserPassword.value === confirmPassword.value){
            return true
        } else {
            warning.innerHTML = 'Confirm password not value'
        }
    }
   
    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');                        
            warning.innerHTML = 'Inter email!';
            warningpass.innerHTML = 'Inter password!'            

        } else {
            input.classList.remove('error');            
        }
    });

    if (emptyInputs.length !== 0) {
        warning.innerHTML = 'Inter email!';
        return false;
    }

    if(!validateEmail(emailVal)) {
        warning.innerHTML = 'Email not correct'        
        newUserEmail.classList.add('error');        
        return false;
    } else {
        newUserEmail.classList.remove('error');
    }     
      
})
function completed() {
    setTimeout(function(){
    window.location.assign('../main.html')
    },1000)
}