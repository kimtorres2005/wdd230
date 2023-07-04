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

// JavaScript code to handle dark mode toggle
// document.addEventListener("DOMContentLoaded", function () {
//     const darkModeToggle = document.getElementById("dark-mode-toggle");

//     darkModeToggle.addEventListener("change", function () {
//         if (darkModeToggle.checked) {
//             enableDarkMode();
//         } else {
//             disableDarkMode();
//         }
//     });

//     function enableDarkMode() {
//         // Add code to enable dark mode
//         document.body.classList.add("dark-mode");
//     }

//     function disableDarkMode() {
//         // Add code to disable dark mode
//         document.body.classList.remove("dark-mode");
//     }
// });

emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid @byui.edu email address.";
    } else {
        emailError.textContent = "";
    }
});
