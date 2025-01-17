import { formItems } from "./validations-form/validation.js";
import { validationForm } from "./validations-form/validation.js";
import { validateUserName } from "./validations-form/validation-username.js";
import { validateEmail, verifyEmail } from "./validations-form/validation-email.js";
import { validatePassword, verifyPassword } from "./validations-form/validation-password.js";

const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validationForm();

    if (isValid) {
        window.location.href = './congrulations.html';
    }
}

formItems.form.addEventListener('submit', handleSubmit);

formItems.username.addEventListener('input', () => {
    validateUserName(formItems.username.value.trim());
});

formItems.email.addEventListener('input', () => {
    validateEmail(formItems.email.value.trim());
});

formItems.confirmEmail.addEventListener('input', () => {
    verifyEmail(formItems.email.value.trim(), formItems.confirmEmail.value.trim());
});

formItems.password.addEventListener('input', () => {
    validatePassword(formItems.password.value.trim(), formItems.minlength);
});

formItems.confirmPassword.addEventListener('input', () => {
    verifyPassword(formItems.password.value.trim(), formItems.confirmPassword.value.trim());
});