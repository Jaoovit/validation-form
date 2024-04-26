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
    console.log("USA");
  } else if ((country.value == "United Kingdom") & (ukValidaty == false)) {
    zipCodeSpan.textContent = "Enter a zipcode with a valid format";
    zipCode.className = "invalid";
    console.log("UK");
  } else {
    zipCodeSpan.textContent = "";
    zipCode.className = "";
  }
}

//send forms

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  validateEmail();
  validateZipCode();
});
