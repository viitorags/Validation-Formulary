import { formItems } from "./validation.js";

const validatePassword = (password, minlength) => {
    if (!password) {
        formItems.errorElement[3].classList.add('error');
        formItems.errorElement[3].innerHTML = 'Senha é necessária';
        return false;
    } else {
        formItems.errorElement[3].classList.remove('error');
    }

    if (password.length < minlength) {
        formItems.errorElement[3].classList.add('error');
        formItems.errorElement[3].innerHTML = `Por favor a senha necessita de pelo menos ${minlength} caractéres`;
        return false;
    } else {
        formItems.errorElement[3].classList.remove('error');
    }

    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
        formItems.errorElement[3].classList.add('error');
        formItems.errorElement[3].innerHTML = 'Por favor use pelo menos uma letra maiúscula';
        return false;
    } else {
        formItems.errorElement[3].classList.remove('error');
    }

    const hasNumber = /\d/g;
    if (!hasNumber.test(password)) {
        formItems.errorElement[3].classList.add('error');
        formItems.errorElement[3].innerHTML = 'Por favor use pelo menos um número';
        return false;
    } else {
        formItems.errorElement[3].classList.remove('error');
    }

    return '';

}

const verifyPassword = (password, confirmPassword) => {
    if (confirmPassword !== password) {
        formItems.errorElement[4].classList.add('error');
        formItems.errorElement[4].innerHTML = 'As senhas não coincidem!';
        return false;
    } else {
        formItems.errorElement[4].classList.remove('error');
    }

    return '';
};

export { validatePassword, verifyPassword };