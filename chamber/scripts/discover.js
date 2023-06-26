// Get the current timestamp
var currentTime = new Date().getTime();

// Check if the user's first visit timestamp is stored in the browser's local storage
if (!localStorage.getItem('firstVisit')) {
    // First visit, display the welcome message
    document.querySelector('.days').textContent = 'Welcome! Let us know if you have any questions.';

    // Store the current timestamp as the first visit timestamp
    localStorage.setItem('firstVisit', currentTime);
} else {
    // Get the timestamp of the user's previous visit from local storage
    var previousVisitTime = localStorage.getItem('lastVisit');

    // Calculate the time difference in milliseconds between the previous visit and the current visit
    var timeDifference = currentTime - previousVisitTime;

    // Calculate the number of days since the previous visit
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
        // Less than a day since the last visit, display "Back so soon! Awesome!"
        document.querySelector('.days').textContent = 'Back so soon! Awesome!';
    } else {
        // More than a day since the last visit, display "You last visited _ day(s) ago."
        var message = 'You last visited ' + daysDifference + ' day';
        if (daysDifference > 1) {
            message += 's';
        }
        message += ' ago.';
        document.querySelector('.days').textContent = message;
    }
}

// Store the current timestamp as the last visit timestamp
localStorage.setItem('lastVisit', currentTime);
