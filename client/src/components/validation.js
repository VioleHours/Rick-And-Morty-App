const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /\d/


export function validation(userData) {
    let errors = {};

    if(!userData.username) errors.username = 'El nombre de usuario no existe'
    else if (userData.username.length > 0 && !regexEmail.test(userData.username)) errors.username = 'El campo debe ser un email';
    else if (userData.username.lenght > 35) errors.username = 'El nombre de usuario es demasiado largo';
    else if (!regexEmail.username) errors.username = 'El nombre no es valido'

    if (userData.password.lenght < 6) errors.password = 'La contraseña es demasiado corta';
    else if(!regexPassword.test(userData.password)) errors.password = 'La contraseña debe incluir un numero'
    else if (userData.password.lenght > 10) errors.password = 'La contraseña es demasiado larga';
    else if (!regexPassword.password) errors.password = 'La contraseña no es válida.'
    return errors
}

