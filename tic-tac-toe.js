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

    
    const newGameBtn = document.querySelector(".btn");
    const defaultMessage = "Move your mouse over a square and click to play an X or an O.";


    newGameBtn.addEventListener("click", function() {
        gameState = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameOver = false;

        squares.forEach(function(square) {
            square.textContent = "";
            square.classList.remove("X");
            square.classList.remove("O");
            square.classList.remove("hover");
        });

        document.getElementById("status").textContent = defaultMessage;
        document.getElementById("status").classList.remove("you-won");
    });