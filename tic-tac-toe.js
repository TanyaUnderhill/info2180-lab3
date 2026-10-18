window.onload = function() {
    const squares = document.querySelectorAll("#board > div");
    let gameState = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";

    squares.forEach(function(square, index) {
        square.classList.add("square"); // From Ex 1

        square.addEventListener("click", function() {
            if (gameState[index] === "") {
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                
                if (currentPlayer === "X") { currentPlayer = "O"; } 
                else { currentPlayer = "X"; }
            }
        });
    });
};