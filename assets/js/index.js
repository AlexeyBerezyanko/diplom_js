window.appUser = [
    {
        email: 'alexey@gmail.com',
        password: '111111'
    }
];

let disabledFormButton = function(form, button){
    button.disabled = !form.checkValidity();
}
let completed = function(){
    setTimeout(function(){
        window.location.replace('./home.html');
        localStorage.setItem('person', JSON.stringify(appUser))
    },1000)
}


export {
    disabledFormButton,
    completed
}