import { formItems } from "./validation.js";

const validateUserName = (name) => {
    if (!name) {
        formItems.errorElement[0].classList.add('error');
        return formItems.errorElement[0].innerHTML = 'O nome não pode estar vazio';
    } else {
        formItems.errorElement[0].classList.remove('error');
    }
};

export { validateUserName };