function setErrorMessage(field, errorMessage) {
  const errorSpan = document.querySelector(".error");
  errorSpan.id = "has-error";

  field.setCustomValidity(errorMessage);
  errorSpan.innerText = errorMessage;
}

function removeErrorMessage(field) {
  const errorSpan = document.querySelector(".error");
  errorSpan.id = "no-error";

  field.setCustomValidity("");
  errorSpan.innerText = "";
}

export { setErrorMessage, removeErrorMessage };
