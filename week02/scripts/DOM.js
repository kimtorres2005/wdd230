const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const myItem = input.value;
    input.value = "";

    if (myItem !== "") { // Check if myItem is not empty
        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listButton = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listButton);
        listButton.textContent = "X";
        listButton.style.color = "red";
        list.appendChild(listItem);

        listButton.addEventListener("click", () => {
            list.removeChild(listItem);
        });
    }
    input.focus();
});
