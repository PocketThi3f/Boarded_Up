// Start off by creating a var to log user input value to console
var value = document.getElementById("valueInput").value;

// Log the value to console
// console.log(value);

// Create a var to capture button click
var btnClick = document.getElementById("addItem");

// Create function that creates a new element
// function newItem() {
//     var newDiv = document.createElement("div");

//     // Append value into new div
//     newDiv.append(value);

// }

// Main function that listens for user click event for adding game items
btnClick.addEventListener('click', function() {
    console.log(value);
});