// Select element by id
const gameForm = document.getElementById("gameForm");
const gameTable = document.querySelector("#game-table");
const inputBox = document.querySelector(".inputField");
const gameNav = document.querySelector(".game-nav");

// Log result to console
console.log(gameForm);
// console.log(inputBox[0].value);

// Function for web page reloading
function addGameToTable (event) {
    // Keep page from reloading on click
    event.preventDefault();

    // Variable that creates a new div container and give it a class name of game-item
    const newDiv = document.createElement("div");

    // Add class name to newly created divs
    newDiv.className = "game-item";

    // Manipulate element's innerText property and set to empty string after submit
    newDiv.innerText = inputBox.value;
    newDiv.style.display = 'none';
    inputBox.value = '';

    // Add the item into given element with id of game-table
    gameTable.appendChild(newDiv);

    // Make a new variable to put the element as a button to display game information
    const gameDisplayButton = document.createElement("button");
    gameDisplayButton.className = "game-display-button";
    gameDisplayButton.innerText = "I am a game";

    // Append display game button into new game-nav div
    gameNav.appendChild(gameDisplayButton);
}

// Create a for loop to put data into an empty array and allow divs to populate normally
// for(var i = 0; i < gameNav.length; i++) {
//     console.log(gameNav[i]);
// }

// Add an event listener function for whenever the user submits the button
gameForm.addEventListener('submit', addGameToTable);
