import { removeErrorMessage, setErrorMessage } from "./error-message";

function validatePostalCode() {
  const fiveDigitRegex = "^\\d{5}$";
  const fiveDigitMessage = (country) =>
    `${country} postal codes must have exactly 5 digits, e.g. 12345.`;

  const constraints = {
    jp: [
      "^\\d{3}-\\d{4}$",
      "Japanese postal codes must have 3 digits followed by a hyphen, followed by 4 digits, e.g. 123-4567.",
    ],
    my: [fiveDigitRegex, fiveDigitMessage("Malaysian")],
    kr: [fiveDigitRegex, fiveDigitMessage("South Korean")],
    id: [fiveDigitRegex, fiveDigitMessage("Indonesian")],
  };

  const postalCode = document.querySelector("#postal-code");
  const country = document.querySelector("#country");

  postalCode.addEventListener("input", () => {
    postalCode.className = "typed";

    const selectedCountry = country.value;
    const postalCodeValue = postalCode.value;
    const regex = new RegExp(constraints[selectedCountry][0]);

    if (regex.test(postalCodeValue)) {
      removeErrorMessage(postalCode);
    } else {
      setErrorMessage(postalCode, constraints[selectedCountry][1]);
    }
  });
}

export { validatePostalCode };
