
function updateDateTime() {
    let dateUpdate = document.lastModified;
    let datetimeElement = document.querySelector('#lastModified');
    datetimeElement.textContent = 'Last Updated: ' + dateUpdate;
}

updateDateTime();
