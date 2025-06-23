import "./styles.css";
import { validatePostalCode } from "./postalcode-validator";
import { validateEmail } from "./email-validator";

validateEmail();
validatePostalCode();

document.querySelector('#submit').addEventListener('click', (event) => {
    event.preventDefault();
});