// Select element by id
const gameItem = document.getElementById("gameForm");
const gameTable = document.getElementById("game-table");
const inputBox = document.getElementsByClassName("inputField");

// Log result to console
console.log(gameItem);

// Function for web page reloading
function addGameToTable (event) {
    event.preventDefault();
}

// Add an event listener function for whenever the user clicks the button
gameItem.addEventListener('click', addGameToTable);
