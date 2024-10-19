const hideButton = document.querySelector('#hide-btn');
const togglePassword = document.querySelector('#password-register');

hideButton.addEventListener('click',()=>{
    if (togglePassword.type == "password"){
        togglePassword.type = "text";
        hideButton.innerHTML = "Ocultar";
    }else{
        togglePassword.type = "password";
        hideButton.innerHTML = "Mostrar";

    }
})

