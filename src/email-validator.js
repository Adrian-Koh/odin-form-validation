function validateEmail() {
    const email = document.querySelector('#email');
    const errorSpan = document.querySelector('.error');

    email.addEventListener('input', () => {
        if (email.validity.typeMismatch) {
            const errorMessage = "Please enter a valid email.";
            errorSpan.innerText = errorMessage;
            email.setCustomValidity(errorMessage);
        }
        else {
            errorSpan.innerText = '';
            email.setCustomValidity("");
        }
    });
}

export {validateEmail};