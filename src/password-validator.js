import { removeErrorMessage, setErrorMessage } from "./error-message";

function validatePassword() {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#password-confirm');

    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

    password.addEventListener('input', () => {
        password.className = 'typed';

        if (regex.test(password.value))  {
            removeErrorMessage(password);
        }
        else {
            const errorMessage = "Password must contain at least 8 characters, have at least one number, one uppercase letter, one lowercase letter and one special character.";
            setErrorMessage(password, errorMessage);
        }
    });

    passwordConfirm.addEventListener('input', () => {
        passwordConfirm.className = 'typed';

        if (password.value === passwordConfirm.value)  {
            removeErrorMessage(passwordConfirm);
        }
        else {
            const errorMessage = "Password and confirmed password must be identical.";
            setErrorMessage(passwordConfirm, errorMessage);
        }
    });
}

export {validatePassword};