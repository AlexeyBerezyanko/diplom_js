let form = document.querySelector('.js-form');
let formInputs = document.querySelectorAll('.js-input');
let inputEmail = document.querySelector('.js-input-email');
let inputPass = document.querySelector('.js-input-password');
let button = document.querySelector('.btn');



function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());    
}
window.addUser = [
    {
        email: 'alex@mail.ru',
        password: '11111'
    }
]

form.onsubmit = function (event) {
    event.preventDefault();
    let warning = document.querySelector('.warning-email');
    let warningpass = document.querySelector('.warning-pass');
    let emailVal = inputEmail.value;
    let paswordVal = inputPass.value;
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
    
    
        ////Кнопка не работает
        // let userData = function(form, button){
        //     if(emailVal === '' || paswordVal === ''){
        //         button.disabled = true    
        //     } else{
        //         button.disabled = false
        //     }
        // }
    

    // let userInter = function(email){
    //     let inputEmail = email.value;
    //     if(window.addUser.find(user => user.email === inputEmail)){
    //         return true
    //     } else{
    //         return false
    //     }
    // }

    // let loginAcc = function(email, password){
    //     if(userInter(email) === true){
    //         let inputPass = password.value;
    //         return Boolean(window.addUser.find(user => user.password === inputPass))
    //     }
    // }







   
   
   
}
