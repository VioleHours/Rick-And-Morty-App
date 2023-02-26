const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export function validation(inputs) {
    let errors = {};

    if(!inputs.username) errors.username = 'El nombre de usuario no existe'
    else if (inputs.username.lenght > 35) errors.username = 'El nombre de usuario es demasiado largo';
    else if (!regexEmail.username) errors.username = 'El nombre no es valido'

    if (inputs.password.lenght < 6) errors.password = 'La contraseña es demasiado corta';
    else if (inputs.password.lenght > 10) errors.password = 'La contraseña es demasiado larga';
    else if (!regexPassword.password) errors.password = 'La contraseña no es válida.'
}