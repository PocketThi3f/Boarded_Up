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

    // Add class name to newly created divs
    newDiv.className = "game-item";

    // Manipulate element's innerText property
    newDiv.innerText = inputBox[0].value;

    // Add the item into given element with id of game-table
    gameTable.appendChild(newDiv);

    // Keep page from reloading on click
    event.preventDefault();
}

// Create a for loop to put data into an empty array and allow divs to populate normally
for(var i = 0; i < gameTable.length; i++) {
    console.log(gameTable[i]);
}

// Add an event listener function for whenever the user clicks the button
gameForm.addEventListener('click', addGameToTable);
