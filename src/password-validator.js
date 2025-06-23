function validatePassword() {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#password-confirm');
    const errorSpan = document.querySelector('.error');

    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

    passwordConfirm.addEventListener('input', () => {
        if (password.value === passwordConfirm.value)  {
            errorSpan.innerText = '';
            password.setCustomValidity("");
            passwordConfirm.setCustomValidity("");
        }
        else {
            const errorMessage = "Password and confirmed password must be identical.";
            errorSpan.innerText = errorMessage;
            password.setCustomValidity(errorMessage);
            passwordConfirm.setCustomValidity(errorMessage);
            return;
        }

        if (regex.test(passwordConfirm.value))  {
            errorSpan.innerText = '';
            password.setCustomValidity("");
            passwordConfirm.setCustomValidity("");
        }
        else {
            const errorMessage = "Password must contain at least 8 characters, have at least one number, one uppercase letter, one lowercase letter and one special character.";
            errorSpan.innerText = errorMessage;
            password.setCustomValidity(errorMessage);
            passwordConfirm.setCustomValidity(errorMessage);
            return;
        }
    });
}

export {validatePassword};