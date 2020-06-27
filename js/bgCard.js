// Click to add a mini review card to the DOM
function createCard() {
    // Local variable
    var i, container;

    container = document.getElementsByClassName("container");
    for (i = 0; i < container.length; i++) {
        <div class="bg-card">
	        <p>Title of Board Game</p>
	        <img src="./images/azul-bg.jpg" alt="A cool board game" />
	        <a href=""><p>Link to Board Game Description and Review</p></a>
        </div>
    }
}

// Select that card container to open with reviews