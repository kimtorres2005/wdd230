
// Set current timestamp value to the hidden field
function setFormLoadTime() {
    var currentDate = new Date();
    document.querySelector("#formLoadTime").value = currentDate.toISOString();
}
window.onload = setFormLoadTime;

// Info Link Expand/Collapse
function setupInfoLinks() {
    const infoLinks = document.querySelectorAll('.info-link');

    infoLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const infoContainer = this.closest('.info-container');
            const infoContent = infoContainer.querySelector('.info-content');
            infoContent.classList.toggle('expanded');
        });
    });
}
setupInfoLinks();