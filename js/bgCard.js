// Start off by creating a var to log user input value to console
var value = document.getElementById("gameInput").value;

// Log the value to console
console.log(value);

// Create a var to capture button click
var btnClick = document.getElementById("addItem");

// Create function that creates a new element
function addItem() {
    var newDiv = document.createElement("div");

    // Append value into new div
    newDiv.append(value);

    // Append new div with user input value into body of the page
    document.body.append(newDiv);
}

// Main function that listens for user click event for adding game items
btnClick.addEventListener('click', addItem);