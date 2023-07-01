
// Set current timestamp value to the hidden field
function setFormLoadTime() {
    var currentDate = new Date();
    document.querySelector("#formLoadTime").value = currentDate.toISOString();
}
window.onload = setFormLoadTime;