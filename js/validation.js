const form = document.getElementById('form')

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const formDataEntries = new FormData(form).entries();
    const {email, password, confirmEmail, confirmPassword} = Object.fromEntries(formDataEntries);

    const emailErrorMessage = validateEmail(email);
    const passwordErrorMessage = validatePassword(password);
    const confirmEmailErrorMessage = verifyEmail(confirmEmail);
    const confirmPasswordErrorMessage = verifyPassword(confirmPassword);

    if (!emailErrorMessage) {
        const emailErrorMessageElement = document.querySelector('.email .input__message');
        emailErrorMessageElement.classList.add('error');
        emailErrorMessageElement.innerHTML = emailErrorMessage;
    }

    if (passwordErrorMessage) {
        const passwordErrorMessageElement = document.querySelector('.password .input__message');
        passwordErrorMessageElement.classList.add('error');
        passwordErrorMessageElement.innerHTML = passwordErrorMessage;
    }

    if (confirmEmailErrorMessage) {
        const confirmEmailErrorMessageElement = document.querySelector('.confirm-email .input__message');
        confirmEmailErrorMessageElement.classList.add('error');
        confirmEmailErrorMessageElement.innerHTML = emailErrorMessage;
    }

    if (confirmPasswordErrorMessage) {
        const confirmPasswordErrorMessageElement = document.querySelector('.confirm-password .input__message');
        confirmPasswordErrorMessageElement.classList.add('error');
        confirmPasswordErrorMessageElement.innerHTML = confirmPasswordErrorMessage;
    }

}

function validatePassword(password, minlength) {

    if (!password) return 'Senha é necessária';

    if (password.length < minlength) {
        return `Por favor a senha necessita de pelo menos ${minlength} caractéres`;
    }

    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
        return 'Por favor use pelo menos uma letra maiúscula';
    }

    const hasNumber =  /\d/g;
    if (!hasNumber.test(password)) {
        return 'Por favor use pelo menos um número';
    }

    return '';

}

function validateEmail(email) {
    if (!email) return 'Email é necessário';

    const isValidEmail = /^\S+@\S+$/g;
    if (!isValidEmail.test(email)) {
        return 'Por favor coloque um email válido';
    }

    return '';

}

function verifyPassword(password, confirmPassword) {
    if (confirmPassword !== password) {
        return 'Senha não são iguais!';
    }

    return '';

}

function verifyEmail(email, confirmEmail) {
    if (confirmEmail !== email) {
        return 'Emails não são iguais!';
    }

    return '';

}