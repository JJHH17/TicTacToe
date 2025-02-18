// Making a player class 

function player() {
    // User alerts/prompts to get this info from user
    const player1Name = prompt("Please enter player 1's name");
    const player2Name = prompt("Please enter player 2's name:");

    // Manages scores
    let player1Score = 0;
    const player1Icon = 'x';
    const getPlayer1Score = () => player1Score;
    const player1Point = () => player1Score++;

    let player2Score = 0;
    const player2Icon = 'o';
    const getPlayer2Score = () => player1Score;
    const player2Point = () => player2Score++;

    let drawScore = 0;
    const getDrawScore = () => drawScore;
    const drawScorePoint = () => drawScore++;

    // Print scores to DOM 
    // inner html to use <p> and <br> where needed here - remove this comment when done!!!
    const scorePrint = document.querySelector("#scores");
    scorePrint.innerHTML = `<p>Current Scores:</p><br><p>${player1Name}: ${player1Score}</p><br><p>${player2Name}: 
    ${player2Score}</p><br><p>Draw: ${drawScore}</p>`;

    return {player1Name, player2Name, getPlayer1Score, player1Point, getPlayer2Score, player2Point, 
        player1Icon, player2Icon, drawScore, getDrawScore, drawScorePoint};
}
let newPlayer = player();


// IIFE for gameboard
const gameboard = (function () {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    
    return {board};
})();

// Gameplay object
function gameplay() {
    // Tells who's turn it is 
    let player1Turn = true;
    let player2Turn = false;

    // DOM elements to display turn
    const turnElement = document.querySelector("#turnElement");
    if (player1Turn) {
        turnElement.innerHTML = `It's ${newPlayer.player1Name}'s turn!`;
    } else if (player2Turn) {
        turnElement.innerHTML = `It's ${newPlayer.player2Name}'s turn!`;
    };

    // add board dom elements
    const one = document.querySelector("#one");
    const two = document.querySelector("#two");
    const three = document.querySelector("#three");
    const four = document.querySelector("#four");
    const five = document.querySelector("#five");
    const six = document.querySelector("#six");
    const seven = document.querySelector("#seven");
    const eight = document.querySelector("#eight");
    const nine = document.querySelector("#nine");

    let currentPlayer = "x"; // Alternates between "X" and "O"

    // Add button click 
    one.addEventListener("click", () => {
        if (currentPlayer == "x") {
            if (gameboard.board[0][0] != "") {
                alert("This spot is taken!");
            } else {
                one.innerHTML = "x";
                gameboard.board[0][0] = 'x'; // Appends to array
                turnElement.innerHTML = `It's ${newPlayer.player2Name}'s turn!`;
                currentPlayer = 'o';
                winCheck()}
        } else {
            if (gameboard.board[0][0] != "") {
                alert("This spot is taken!");
            } else {
                one.innerHTML = "o";
                gameboard.board[0][0] = 'o';
                turnElement.innerHTML = `It's ${newPlayer.player1Name}'s turn!`;
                currentPlayer = 'x';
                winCheck()}
        }
    });
    two.addEventListener("click", () => {
        if (currentPlayer == "x") {
            if (gameboard.board[0][1] != "") {
                alert("This spot is taken!");
            } else {
                two.innerHTML = "x";
                gameboard.board[0][1] = 'x';
                turnElement.innerHTML = `It's ${newPlayer.player2Name}'s turn!`;
                currentPlayer = 'o';
                winCheck()}
        } else {
            if (gameboard.board[0][1] != "") {
                alert("This spot is taken!");
            } else {
                two.innerHTML = "o";
                gameboard.board[0][1] = 'o';
                turnElement.innerHTML = `It's ${newPlayer.player1Name}'s turn!`;
                currentPlayer = 'x';
                winCheck()}
        }
    });
    three.addEventListener("click", () => {
        if (currentPlayer == "x") {
            if (gameboard.board[0][2] != "") {
                alert("This spot is taken!");
            } else {
                three.innerHTML = "x";
                gameboard.board[0][2] = 'x';
                turnElement.innerHTML = `It's ${newPlayer.player2Name}'s turn!`;
                currentPlayer = 'o';
                winCheck()}
        } else {
            if (gameboard.board[0][2] != "") {
                alert("This spot is taken!");
            } else {
                three.innerHTML = "o";
                gameboard.board[0][2] = 'o';
                turnElement.innerHTML = `It's ${newPlayer.player1Name}'s turn!`;
                currentPlayer = 'x';
                winCheck()}
        }
    });
    four.addEventListener("click", () => {
        if (currentPlayer == "x") {
            if (gameboard.board[1][0] != "") {
                alert("This spot is taken!");
            } else {
                four.innerHTML = "x";
                gameboard.board[1][0] = 'x';
                turnElement.innerHTML = `It's ${newPlayer.player2Name}'s turn!`;
                currentPlayer = 'o';
                winCheck()}
        } else {
            if (gameboard.board[1][0] != "") {
                alert("This spot is taken!");
            } else {
                four.innerHTML = "o";
                gameboard.board[1][0] = 'o';
                turnElement.innerHTML = `It's ${newPlayer.player1Name}'s turn!`;
                currentPlayer = 'x';
                winCheck()}
        }
    });
    five.addEventListener("click", () => {
        if (currentPlayer == "x") {
            if (gameboard.board[1][1] != "") {
                alert("This spot is taken!");
            } else {
                five.innerHTML = "x";
                gameboard.board[1][1] = 'x';
                turnElement.innerHTML = `It's ${newPlayer.player2Name}'s turn!`;
                currentPlayer = 'o';
                winCheck()}
        } else {
            if (gameboard.board[1][1] != "") {
                alert("This spot is taken!");
            } else {
                five.innerHTML = "o";
                gameboard.board[1][1] = 'o';
                turnElement.innerHTML = `It's ${newPlayer.player1Name}'s turn!`;
                currentPlayer = 'x';
                winCheck()}
        }
    });
    six.addEventListener("click", () => {
        if (currentPlayer == "x") {
            if (gameboard.board[1][2] != "") {
                alert("This spot is taken!");
            } else {
                six.innerHTML = "x";
                gameboard.board[1][2] = 'x';
                turnElement.innerHTML = `It's ${newPlayer.player2Name}'s turn!`;
                currentPlayer = 'o';
                winCheck()}
        } else {
            if (gameboard.board[1][2] != "") {
                alert("This spot is taken!");
            } else {
                six.innerHTML = "o";
                gameboard.board[1][2] = 'o';
                turnElement.innerHTML = `It's ${newPlayer.player1Name}'s turn!`;
                currentPlayer = 'x';
                winCheck()}
        }
    });
    seven.addEventListener("click", () => {
        if (currentPlayer == "x") {
            if (gameboard.board[2][0] != "") {
                alert("This spot is taken!");
            } else {
                seven.innerHTML = "x";
                gameboard.board[2][0] = 'x';
                turnElement.innerHTML = `It's ${newPlayer.player2Name}'s turn!`;
                currentPlayer = 'o';
                winCheck()}
        } else {
            if (gameboard.board[2][0] != "") {
                alert("This spot is taken!");
            } else {
                seven.innerHTML = "o";
                gameboard.board[2][0] = 'o';
                turnElement.innerHTML = `It's ${newPlayer.player1Name}'s turn!`;
                currentPlayer = 'x';
                winCheck()}
        }
    });
    eight.addEventListener("click", () => {
        if (currentPlayer == "x") {
            if (gameboard.board[2][1] != "") {
                alert("This spot is taken!");
            } else {
                eight.innerHTML = "x";
                gameboard.board[2][1] = 'x';
                turnElement.innerHTML = `It's ${newPlayer.player2Name}'s turn!`;
                currentPlayer = 'o';
                winCheck()}
        } else {
            if (gameboard.board[2][1] != "") {
                alert("This spot is taken!");
            } else {
                eight.innerHTML = "o";
                gameboard.board[2][1] = 'o';
                turnElement.innerHTML = `It's ${newPlayer.player1Name}'s turn!`;
                currentPlayer = 'x';
                winCheck()}
        }
    });
    nine.addEventListener("click", () => {
        if (currentPlayer == "x") {
            if (gameboard.board[2][2] != "") {
                alert("This spot is taken!");
            } else {
                nine.innerHTML = "x";
                gameboard.board[2][2] = 'x';
                turnElement.innerHTML = `It's ${newPlayer.player2Name}'s turn!`;
                currentPlayer = 'o';
                winCheck()}
        } else {
            if (gameboard.board[2][2] != "") {
                alert("This spot is taken!");
            } else {
                nine.innerHTML = "o";
                gameboard.board[2][2] = 'o';
                turnElement.innerHTML = `It's ${newPlayer.player1Name}'s turn!`;
                currentPlayer = 'x';
                winCheck()}
        }
    });
}

function winCheck() {
    // Checks win condition
    // Rows
    if (gameboard.board[0][0] == 'x' && gameboard.board[0][1] == 'x' && gameboard.board[0][2] == 'x') {
        alert(`${newPlayer.player1Name} wins!`); 
    } else if (gameboard.board[0][0] == 'o' && gameboard.board[0][1] == 'o' && gameboard.board[0][2] == 'o') {
        alert(`${newPlayer.player2Name} wins!`);
    } else if (gameboard.board[1][0] == 'x' && gameboard.board[1][1] == 'x' && gameboard.board[1][2] == 'x') {
        alert(`${newPlayer.player1Name} wins!`);
    } else if (gameboard.board[1][0] == 'o' && gameboard.board[1][1] == 'o' && gameboard.board[1][2] == 'o') {
        alert(`${newPlayer.player2Name} wins!`);
    } else if (gameboard.board[2][0] == 'x' && gameboard.board[2][1] == 'x' && gameboard.board[2][2] == 'x') {
        alert(`${newPlayer.player1Name} wins!`);
    } else if (gameboard.board[2][0] == 'o' && gameboard.board[2][1] == 'o' && gameboard.board[2][2] == 'o') {
        alert(`${newPlayer.player2Name} wins!`);
        // Columns
    } else if (gameboard.board[0][0] == 'x' && gameboard.board[1][0] == 'x' && gameboard.board[2][0] == 'x') {
        alert(`${newPlayer.player1Name} wins!`);
    } else if (gameboard.board[0][0] == 'o' && gameboard.board[1][0] == 'o' && gameboard.board[2][0] == 'o') {
        alert(`${newPlayer.player2Name} wins!`);
    } else if (gameboard.board[0][1] == 'x' && gameboard.board[1][1] == 'x' && gameboard.board[2][1] == 'x') {
        alert(`${newPlayer.player1Name} wins!`);
    } else if (gameboard.board[0][1] == 'o' && gameboard.board[1][1] == 'o' && gameboard.board[2][1] == 'o') {
        alert(`${newPlayer.player2Name} wins!`);
    } else if (gameboard.board[0][2] == 'x' && gameboard.board[1][2] == 'x' && gameboard.board[2][2] == 'x') {
        alert(`${newPlayer.player1Name} wins!`);
    } else if (gameboard.board[0][2] == 'o' && gameboard.board[1][2] == 'o' && gameboard.board[2][2] == 'o') {
        alert(`${newPlayer.player2Name} wins!`);
        // Diagonal
    } else if (gameboard.board[0][0] == 'x' && gameboard.board[1][1] == 'x' && gameboard.board[2][2] == 'x') {
        alert(`${newPlayer.player1Name} wins!`);
    } else if (gameboard.board[0][0] == 'o' && gameboard.board[1][1] == 'o' && gameboard.board[2][2] == 'o') {
        alert(`${newPlayer.player2Name} wins!`);
    } else if (gameboard.board[0][2] == 'x' && gameboard.board[1][1] == 'x' && gameboard.board[2][0] == 'x') {
        alert(`${newPlayer.player1Name} wins!`);
    } else if (gameboard.board[0][2] == 'o' && gameboard.board[1][1] == 'o' && gameboard.board[2][0] == 'o') {
        alert(`${newPlayer.player2Name} wins!`);
    } // Add draw condition
}
gameplay();