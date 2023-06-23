const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const myItem = input.value;

    if (myItem !== "") {
        displayList(myItem);
        chaptersArray.push(myItem);
        setChapterList(chaptersArray);
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = item;
    listItem.appendChild(listButton);
    listButton.textContent = "X";
    listButton.style.color = "red";
    list.appendChild(listItem);

    listButton.addEventListener("click", () => {
        deleteChapter(item);
        list.removeChild(listItem);
    });
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList(chaptersArray);
}

function getChapterList() {
    const storedChapters = localStorage.getItem("chapters");
    return storedChapters ? JSON.parse(storedChapters) : [];
}

function setChapterList(chapters) {
    localStorage.setItem("chapters", JSON.stringify(chapters));
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
    displayList(chapter);
});

