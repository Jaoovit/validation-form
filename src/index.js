import "./style.css";

// Email validation

const submitBtn = document.querySelector("#submitBtn");
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

submitBtn.addEventListener("click", () => {
  validateEmail();
});
