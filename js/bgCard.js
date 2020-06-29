// Click to add a mini review card to the DOM
function createCard() {
    // Local variable
    var card, container;

    container = document.getElementsByClassName("container");
    for (card = 0; card < container.length; card++) {
        <div class="bg-card">
	        <p>Title of Board Game</p>
	        <img src="./images/azul-bg.jpg" alt="A cool board game" />
	        <a href=""><p>Link to Board Game Description and Review</p></a>
        </div>
    }
}

// Select that card container to open with reviews