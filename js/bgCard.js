// Click to add a mini review card to the DOM
function createCard() {
    // Local variable
    var div = document.createElement('div');

    // Create div with classname bg-card
    div.className = "bg-card";

    // Insert html with innerHTML function
    div.innerHTML = "<p>Title of Board Game</p>";

    // Append to div with classname of container
    document.body.append(div);

	        // <img src="./images/azul-bg.jpg" alt="A cool board game" />
            // <a href=""><p>Link to Board Game Description and Review</p></a>
            
    // createTextNode seems to mostly be required? innerHTML
}