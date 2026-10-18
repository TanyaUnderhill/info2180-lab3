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

     function checkWinner() {
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            
            // If the three squares match and are not empty
            if (gameState[a] !== "" && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {

                statusDiv.textContent = "Congratulations! " + gameState[a] + " is the Winner!";

                statusDiv.classList.add("you-won");
                gameOver = true;
                return; // Stop checking
            }
        }
    }