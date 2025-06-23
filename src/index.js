import "./styles.css";
import { validatePostalCode } from "./postalcode-validator";
import { validateEmail } from "./email-validator";
import { validatePassword } from "./password-validator";

validateEmail();
validatePostalCode();
validatePassword();

document.querySelector('#submit').addEventListener('click', (event) => {
    event.preventDefault();
});