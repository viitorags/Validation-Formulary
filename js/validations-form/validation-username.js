import { formItems } from "./validation.js";

const validateUserName = (name) => {
    if (!name) {
        formItems.errorElement[0].classList.add('error');
        formItems.errorElement[0].innerHTML = 'O nome não pode estar vazio';
        return false;
    } else {
        formItems.errorElement[0].classList.remove('error');
        return true;
    }
};

export { validateUserName };