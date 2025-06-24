import { removeErrorMessage, setErrorMessage } from "./error-message";

function validateEmail() {
  const email = document.querySelector("#email");

  email.addEventListener("input", () => {
    email.className = "typed";

    if (email.validity.typeMismatch) {
      const errorMessage = "Please enter a valid email.";
      setErrorMessage(email, errorMessage);
    } else {
      removeErrorMessage(email);
    }
  });
}

export { validateEmail };
