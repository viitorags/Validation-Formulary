const form = document.getElementById('form')
const username = document.getElementById('name')
const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirm-email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const minlength = 8;
const errorElement = document.querySelectorAll('.input__message');

const handleSubmit = (e) => {
    e.preventDefault();

    validationForm();

    const hasError = document.querySelector('.input__message.error') !== null;

    if (!hasError) {
        window.location.href = './congrulations.html';
    }
}

const validationForm = () => {
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const confirmEmailValue = confirmEmail.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    validateUserName(userNameValue);
    validatePassword(passwordValue, minlength);
    validateEmail(emailValue);
    verifyEmail(passwordValue, confirmPasswordValue);
    verifyPassword(emailValue, confirmEmailValue);

    let isValid = true;

    isValid &= validateUserName(userNameValue);
    isValid &= validatePassword(passwordValue, minlength);
    isValid &= validateEmail(emailValue);
    isValid &= verifyEmail(emailValue, confirmEmailValue);
    isValid &= verifyPassword(passwordValue, confirmPasswordValue);

    return isValid;

}

const validateUserName = (name) => {

    if (!name) {
        errorElement[0].classList.add('error');
        errorElement[0].innerHTML = 'O nome não pode estar vazio';
        return;
    } else {
        errorElement[0].classList.remove('error');
    }
};

const validatePassword = (password, minlength) => {
    if (!password) {
        errorElement[3].classList.add('error');
        errorElement[3].innerHTML = 'Senha é necessária';
        return;
    } else {
        errorElement[3].classList.remove('error');
    }

    if (password.length < minlength) {
        errorElement[3].classList.add('error');
        return errorElement[3].innerHTML = `Por favor a senha necessita de pelo menos ${minlength} caractéres`;
    } else {
        errorElement[3].classList.remove('error');
    }

    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
        errorElement[3].classList.add('error');
        return errorElement[3].innerHTML = 'Por favor use pelo menos uma letra maiúscula';
    } else {
        errorElement[3].classList.remove('error');
    }

    const hasNumber = /\d/g;
    if (!hasNumber.test(password)) {
        errorElement[3].classList.add('error');
        return errorElement[3].innerHTML = 'Por favor use pelo menos um número';
    } else {
        errorElement[3].classList.remove('error');
    }

    return '';

}

const validateEmail = (email) => {

    if (!email) {
        errorElement[1].classList.add('error');
        errorElement[1].innerHTML = 'Email é necessário';
        return;
    } else {
        errorElement[1].classList.remove('error');
    }

    const isValidEmail = /^\S+@\S+$/g;
    if (!isValidEmail.test(email)) {
        errorElement[1].classList.add('error');
        return errorElement[1].innerHTML = 'Por favor coloque um email válido';
    }

    return '';
};

const verifyPassword = (password, confirmPassword) => {
    if (confirmPassword !== password) {
        errorElement[4].classList.add('error');
        return errorElement[4].innerHTML = 'As senhas não coincidem!';
    } else {
        errorElement[4].classList.remove('error');
    }

    return '';
};

const verifyEmail = (email, confirmEmail) => {
    if (confirmEmail !== email) {
        errorElement[2].classList.add('error');
        return errorElement[2].innerHTML = 'Os emails não coincidem!';
    } else {
        errorElement[2].classList.remove('error');
    }

    return '';
};

form.addEventListener('submit', handleSubmit);

username.addEventListener('input', () => {
    validateUserName(username.value.trim());
});

email.addEventListener('input', () => {
    validateEmail(email.value.trim());
});

confirmEmail.addEventListener('input', () => {
    verifyEmail(email.value.trim(), confirmEmail.value.trim());
});

password.addEventListener('input', () => {
    validatePassword(password.value.trim(), minlength);
});

confirmPassword.addEventListener('input', () => {
    verifyPassword(password.value.trim(), confirmPassword.value.trim());
});