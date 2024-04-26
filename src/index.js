import "./style.css";

// Email validation

const email = document.querySelector("#email");
const emailSpan = document.querySelector("#emailSpan");
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail() {
  let emailValidaty = emailPattern.test(email.value);
  if (email.value.length === 0) {
    emailSpan.textContent = "This field is required";
    email.className = "invalid";
  } else if (emailValidaty == false) {
    emailSpan.textContent = "Enter an email with a valid format";
    email.className = "invalid";
  } else {
    emailSpan.textContent = "";
    email.className = "";
  }
}

//country

const country = document.querySelector("#country");

//validation zip code

const zipCode = document.querySelector("#zipCode");
const zipCodeSpan = document.querySelector("#zipCodeSpan");
const unitedStatesZipCodePatter = /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/g;
const unitedKingdomZipCodePatter = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

function validateZipCode() {
  let usValidaty = unitedStatesZipCodePatter.test(zipCode.value);
  let ukValidaty = unitedKingdomZipCodePatter.test(zipCode.value);
  if (zipCode.value.length === 0) {
    zipCodeSpan.textContent = "This field is required";
    zipCode.className = "invalid";
  } else if ((country.value == "United States") & (usValidaty == false)) {
    zipCodeSpan.textContent = "Enter a zipcode with a valid format";
    zipCode.className = "invalid";
  } else if ((country.value == "United Kingdom") & (ukValidaty == false)) {
    zipCodeSpan.textContent = "Enter a zipcode with a valid format";
    zipCode.className = "invalid";
  } else {
    zipCodeSpan.textContent = "";
    zipCode.className = "";
  }
}

//validation password

const password = document.querySelector("#password");
const passwordSpan = document.querySelector("#passwordSpan");
const passwordPatter =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]/;

function validatePassword() {
  let passwordValidaty = passwordPatter.test(password.value);
  if (password.value.length == 0) {
    passwordSpan.textContent = "This field is required";
    password.className = "invalid";
  } else if (password.value.length < 6) {
    passwordSpan.textContent = "Your password is too short";
    password.className = "invalid";
  } else if (password.value.length > 16) {
    passwordSpan.textContent = "Your password is too long";
    password.className = "invalid";
  } else if (passwordValidaty == false) {
    passwordSpan.innerHTML =
      "Your password must be at least: <p>One lowercase alphabet</p><p>One uppercase alphabet</p><p>One Numeric digit</p><p>One special character</p>";
    password.className = "invalid";
  } else {
    passwordSpan.textContent = "";
    password.className = "";
  }
}

//confirm password

const confPassword = document.querySelector("#confPassword");
const confPasswordSpan = document.querySelector("#confPasswordSpan");

function confirmPassword() {
  if (password.value != confPassword.value) {
    confPasswordSpan.textContent = "Password mismatch";
    confPassword.className = "invalid";
  } else {
    confPasswordSpan.textContent = "";
    confPassword.className = "";
  }
}

//send forms

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  validateEmail();
  validateZipCode();
  validatePassword();
  confirmPassword();
});
