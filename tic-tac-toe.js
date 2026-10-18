window.onload = function() {
    const squares = document.querySelectorAll("#board > div");
    
    squares.forEach(function(square) {
        square.classList.add("square");
    });
};