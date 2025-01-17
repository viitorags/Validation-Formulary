import { formItems } from "./validation.js";

const validateEmail = (email) => {

    if (!email) {
        formItems.errorElement[1].classList.add('error');
        return formItems.errorElement[1].innerHTML = 'Email é necessário';
    } else {
        formItems.errorElement[1].classList.remove('error');
    }

    const isValidEmail = /^\S+@\S+$/g;
    if (!isValidEmail.test(email)) {
        formItems.errorElement[1].classList.add('error');
        return formItems.errorElement[1].innerHTML = 'Por favor coloque um email válido';
    }

    return '';
};


const verifyEmail = (email, confirmEmail) => {
    if (confirmEmail !== email) {
        formItems.errorElement[2].classList.add('error');
        return formItems.errorElement[2].innerHTML = 'Os emails não coincidem!';
    } else {
        formItems.errorElement[2].classList.remove('error');
    }

    return '';
};

export { validateEmail, verifyEmail };