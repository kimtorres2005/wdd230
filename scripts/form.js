// JavaScript code to handle form validation
const usernameInput = document.getElementById("uname");
const usernameError = document.getElementById("username-error");

usernameInput.addEventListener("input", function () {
    if (usernameInput.validity.patternMismatch) {
        usernameError.textContent = "Username must contain at least 8 alphanumeric characters.";
    } else {
        usernameError.textContent = "";
    }
});
