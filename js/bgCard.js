// Click to add a mini review card to the DOM
function createCard() {
    // Local variable
    var elementDiv, elementPara, elementImg, elementLink;

    // Button creates div element with classname of bg-card
    cardBtn = document.createElement("div").className = "bg-card";

    // Appends the new element into a div with classname container
    document.body.getElementsByClassName("container").appendChild(cardBtn);
	        // <p>Title of Board Game</p>
	        // <img src="./images/azul-bg.jpg" alt="A cool board game" />
	        // <a href=""><p>Link to Board Game Description and Review</p></a>
}