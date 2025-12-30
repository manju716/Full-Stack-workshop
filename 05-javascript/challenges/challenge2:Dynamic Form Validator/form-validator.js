let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submitBtn = document.getElementById("submitBtn");

let uError = document.getElementById("usernameError");
let eError = document.getElementById("emailError");
let pError = document.getElementById("passwordError");
let cError = document.getElementById("confirmError");

// Username validation
username.onblur = function () {
  let value = username.value;

  if (value.length < 3 || value.length > 15) {
    uError.innerText = "Username must be 3-15 characters";
    username.classList.remove("valid");
  } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
    uError.innerText = "Only letters and numbers allowed";
    username.classList.remove("valid");
  } else {
    uError.innerText = "";
    username.classList.add("valid");
  }
  checkForm();
};

// Email validation
email.onblur = function () {
  let value = email.value;

  if (!/^\S+@\S+\.\S+$/.test(value)) {
    eError.innerText = "Enter valid email";
    email.classList.remove("valid");
  } else {
    eError.innerText = "";
    email.classList.add("valid");
  }
  checkForm();
};

// Password validation
password.onblur = function () {
  let value = password.value;

  if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}/.test(value)) {
    pError.innerText = "Password must be strong";
    password.classList.remove("valid");
  } else {
    pError.innerText = "";
    password.classList.add("valid");
  }
  checkForm();
};

// Confirm password
confirmPassword.onblur = function () {
  if (confirmPassword.value !== password.value) {
    cError.innerText = "Passwords do not match";
    confirmPassword.classList.remove("valid");
  } else {
    cError.innerText = "";
    confirmPassword.classList.add("valid");
  }
  checkForm();
};

// if valid it will enable
function checkForm() {
  if (
    username.classList.contains("valid") &&
    email.classList.contains("valid") &&
    password.classList.contains("valid") &&
    confirmPassword.classList.contains("valid")
  ) {
    submitBtn.disabled = false;
    submitBtn.classList.add("enabled");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("enabled");
  }
}


// if invalid it prevent register
document.getElementById("form").onsubmit = function (e) {
  if (submitBtn.disabled) {
    e.preventDefault();
  }
};
