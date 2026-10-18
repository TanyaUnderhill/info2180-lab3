window.onload = function() {
    // --- EXERCISE 1: Layout the board ---
    const squares = document.querySelectorAll("#board > div");
    const statusDiv = document.getElementById("status");
    const newGameBtn = document.querySelector(".btn");
    
    // PDF Hint for Ex 2: Initialize an empty array to keep track of the state
    let gameState = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameOver = false; // To stop clicks after someone wins

    const defaultMessage = "Move your mouse over a square and click to play an X or an O.";

    // The 8 winning combinations (Rows, Columns, Diagonals)
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    // Loop through each square
    squares.forEach(function(square, index) {
        // Add the class for Ex 1
        square.classList.add("square");

        // --- EXERCISE 2: Add X or O when clicked ---
        square.addEventListener("click", function() {
            // Only place a mark if the square is empty AND the game is not over
            if (gameState[index] === "" && !gameOver) {
                
                // Update state and visual
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer); // Add "X" or "O" class
                
                // Check for a winner BEFORE switching players
                checkWinner();
                
                // Switch player
                if (currentPlayer === "X") {
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }
            }
        });

        // --- EXERCISE 3: Change style on hover ---
        square.addEventListener("mouseover", function() {
            // Only add hover class if the square is empty and game isn't over
            if (gameState[index] === "" && !gameOver) {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });
    });

    // --- EXERCISE 4: Check for winner and update status ---
    function checkWinner() {
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            
            // If the three squares match and are not empty
            if (gameState[a] !== "" && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                // Update the status div with the required text
                statusDiv.textContent = "Congratulations! " + gameState[a] + " is the Winner!";
                // Add the required class
                statusDiv.classList.add("you-won");
                gameOver = true;
                return; // Stop checking
            }
        }
    }

    // --- EXERCISE 5: Restart the game ---
    newGameBtn.addEventListener("click", function() {
        // Reset variables
        gameState = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameOver = false;

        // Reset the board visually
        squares.forEach(function(square) {
            square.textContent = "";
            // Remove the specific classes, but keep the base "square" class
            square.classList.remove("X");
            square.classList.remove("O");
            square.classList.remove("hover");
        });

        // Reset the status message and remove the winner class
        statusDiv.textContent = defaultMessage;
        statusDiv.classList.remove("you-won");
    });
};