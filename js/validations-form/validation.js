const formItems = {
    form: document.getElementById('form'),
    username: document.getElementById('name'),
    email: document.getElementById("email"),
    confirmEmail: document.getElementById("confirm-email"),
    password: document.getElementById("password"),
    confirmPassword: document.getElementById("confirm-password"),
    minlength: 8,
    errorElement: document.querySelectorAll('.input__message'),
}

const validationForm = () => {
    const userNameValue = formItems.username.value.trim();
    const emailValue = formItems.email.value.trim();
    const confirmEmailValue = formItems.confirmEmail.value.trim();
    const passwordValue = formItems.password.value.trim();
    const confirmPasswordValue = formItems.confirmPassword.value.trim();

    validateUserName(userNameValue);
    validatePassword(passwordValue, formItems.minlength);
    validateEmail(emailValue);
    verifyEmail(passwordValue, confirmPasswordValue);
    verifyPassword(emailValue, confirmEmailValue);

    let isValid = true;

    isValid &= validateUserName(userNameValue);
    isValid &= validatePassword(passwordValue, formItems.minlength);
    isValid &= validateEmail(emailValue);
    isValid &= verifyEmail(emailValue, confirmEmailValue);
    isValid &= verifyPassword(passwordValue, confirmPasswordValue);

    return isValid;
}

export { formItems, validationForm };