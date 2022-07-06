import {disabledFormButton, completed} from './index.js'

let form = document.querySelector('.js-form');
let formInputs = document.querySelectorAll('.js-input');
let inputEmail = document.querySelector('.js-input-email');
let inputPass = document.querySelector('.js-input-password');
let button = document.querySelector('.btn');


window.appUser = [
    {
        email: 'alexey@gmail.com',
        password: '111111'
    }
];

form.addEventListener('input', function(){
    disabledFormButton(this, '.btn')  
});
  
inputEmail.addEventListener('change', function(){
    formInputs(this, '.js-input-email')
});
  
inputPass.addEventListener('change', function(){
    formInputs(this, '.js-input-password')
});

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());    
}


function userDataValid (){
    if(form.checkValidity()){
        button.disabled = false
    }else {
        button.disabled = true
    }
}

function isUserEmail(email){
    let userEmail =email.value;
    if(Boolean(window.appUsers.find(user => user.email === userEmail))){
        return true
    }
}

let login = function (email, password){
    if(isUserEmail(email) === true){
        let userPassword = password.value;
        return Boolean(window.appUsers.find(user => user.password === userPassword))
    }
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    let warning = document.querySelector('.warning-email');
    let warningpass = document.querySelector('.warning-pass');
    let emailVal = inputEmail.value;    
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
   
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
        inputEmail.classList.add('error');        
        return false;
    } else {
        inputEmail.classList.remove('error');
    } 
    if(isUserEmail(inputEmail) === falce){
        warning.innerHTML = 'This user exists';
    } else {
        if(login(inputEmail, inputPass) === true){
            completed()            
        }
    }   
    
})

function completed(){
    setTimeout(function(){
        window.location.replace('../main.html')
        localStorage.setItem('person', JSON.stringify(appUsers))
    },1000)
}