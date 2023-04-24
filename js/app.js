const form = document.getElementById('form');
const user = document.getElementById('user');
const email = document.getElementById('email');
const contrasenya = document.getElementById('contrasenya');
const recontrasenya = document.getElementById('recontrasenya');

form.addEventListener('submit', e => {
    e.preventDefault();

    validarInputsLogin();
    validarInputs();
});

const setError = (element, message) => {
    const inputC = element.parentElement;
    const errorMostrar = inputC.querySelector('.error');

    errorMostrar.innerText = message;
    inputC.classList.add('error');
    inputC.classList.remove('success');
}

const setSuccess = element => {
    const inputC = element.parentElement;
    const errorMostrar = inputC.querySelector('.error');

    errorMostrar.innerText = '';
    inputC.classList.add('success');
    inputC.classList.remove('error');
}

const validarEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validarInputs =  () => {

    const userValue = user.value.trim();
    const emailValue = email.value.trim();
    const contrasenyaValue = contrasenya.value.trim();
    const recontrasenyaValue = recontrasenya.value.trim();

    if(userValue === '') {
        setError(user, 'Nombre de usuario es requerido');
    } else {
        setSuccess(user);
    }

    if (emailValue === '') {
        setError(email, 'Se requiere un email');
    } else if (!validarEmail(emailValue)){
        setError(email, 'Ingrese un email valido');
    } else {
        setSuccess(email);
    }

    if(contrasenyaValue === '') {
        setError(contrasenya, 'Contraseña es requerida');
    } else if (contrasenyaValue.length < 8 ) {
        setError(contrasenya, 'La contraseña debe ser de al menos 8 caracteres.')
    } else {
        setSuccess(contrasenya);
    }

    if(recontrasenyaValue === '') {
        setError(recontrasenya, 'Porfavor confirme su contraseña');
    } else if (recontrasenyaValue !== contrasenyaValue) {
        setError(recontrasenya, "Las contraseñas no coinciden");
    } else {
        setSuccess(recontrasenya);
    }

};



