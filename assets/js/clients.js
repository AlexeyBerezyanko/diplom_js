let goExit = function(){
    let btnExit = document.querySelector('btn-exit')
    btnExit.addEventListener('click', function(){
        window.localStorage.clear();
    })
}
goExit()