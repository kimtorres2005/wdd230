const placeholderImages = document.querySelectorAll(".placeholder");

function loadImage(entry) {
    const imgElement = entry.target;
    const newImage = new Image();
    newImage.src = imgElement.getAttribute("data-src");

    newImage.addEventListener("load", function () {
        imgElement.src = newImage.src;
    });
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
