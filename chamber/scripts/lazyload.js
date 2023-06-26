const placeholderImages = document.querySelectorAll(".placeholder");

function loadImage(entry) {
    const imgElement = entry.target;
    const newImage = new Image();
    newImage.src = imgElement.getAttribute("data-src");

    newImage.addEventListener("load", function () {
        imgElement.src = newImage.src;
    });

    // Set dimensions for the placeholder image
    imgElement.style.width = "100%";
    imgElement.style.height = "auto";
}

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            loadImage(entry);
            observer.unobserve(entry.target);
        }
    });
});

placeholderImages.forEach(function (image) {
    observer.observe(image);
});
