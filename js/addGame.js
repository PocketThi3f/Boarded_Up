// Select element by id
const gameForm = document.getElementById("gameForm");
const gameTable = document.getElementById("game-table");
const inputBox = document.getElementsByClassName("inputField");

// Log result to console
console.log(gameForm);
console.log(inputBox.value);

// Function for web page reloading
function addGameToTable (event) {

    // Variable that creates a new div container and give it a class name of game-item
    const newDiv = document.createElement("div");

    newDiv.className = "game-item";

    // Manipulate element's innerText property
    newDiv.innerText = inputBox[0].value;

    // Keep page from reloading on click
    event.preventDefault();
}

// Add an event listener function for whenever the user clicks the button
gameItem.addEventListener('click', addGameToTable);
