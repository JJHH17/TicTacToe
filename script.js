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
    scorePrint.innerHTML = `<p>Current Scores</p><p>${player1Name}: ${player1Score}</p><p>${player2Name}: 
    ${player2Score}</p><p>Draw: ${drawScore}`;

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
            one.innerHTML = "x";
            gameboard.board[0][0] = 'x'; // Appends to array
            currentPlayer = 'o';
        } else {
            one.innerHTML = "o";
            // append to array
            gameboard.board[0][0] = 'o';
            currentPlayer = 'x';
        }
    });
    two.addEventListener("click", () => {
        if (currentPlayer == "x") {
            two.innerHTML = "x";
            gameboard.board[0][1] = 'x';
            currentPlayer = 'o';
        } else {
            two.innerHTML = "o";
            gameboard.board[0][1] = 'o';
            currentPlayer = 'x';
        }
    });
    three.addEventListener("click", () => {
        if (currentPlayer == "x") {
            three.innerHTML = "x";
            gameboard.board[0][2] = 'x';
            currentPlayer = 'o';
        } else {
            three.innerHTML = "o";
            gameboard.board[0][2] = 'o';
            currentPlayer = 'x';
        }
    });
    four.addEventListener("click", () => {
        if (currentPlayer == "x") {
            four.innerHTML = "x";
            gameboard.board[1][0] = 'x';
            currentPlayer = 'o';
        } else {
            four.innerHTML = "o";
            gameboard.board[1][0] = 'o';
            currentPlayer = 'x';
        }
    });
    five.addEventListener("click", () => {
        if (currentPlayer == "x") {
            five.innerHTML = "x";
            gameboard.board[1][1] = 'x';
            currentPlayer = 'o';
        } else {
            five.innerHTML = "o";
            gameboard.board[1][1] = 'o';
            currentPlayer = 'x';
        }
    });
    six.addEventListener("click", () => {
        if (currentPlayer == "x") {
            six.innerHTML = "x";
            gameboard.board[1][2] = 'x';
            currentPlayer = 'o';
        } else {
            six.innerHTML = "o";
            gameboard.board[1][2] = 'o';
            currentPlayer = 'x';
        }
    });
    seven.addEventListener("click", () => {
        if (currentPlayer == "x") {
            seven.innerHTML = "x";
            gameboard.board[2][0] = 'x';
            currentPlayer = 'o';
        } else {
            seven.innerHTML = "o";
            gameboard.board[2][0] = 'o';
            currentPlayer = 'x';
        }
    });
    eight.addEventListener("click", () => {
        if (currentPlayer == "x") {
            eight.innerHTML = "x";
            gameboard.board[2][1] = 'x';
            currentPlayer = 'o';
        } else {
            eight.innerHTML = "o";
            gameboard.board[2][1] = 'o';
            currentPlayer = 'x';
        }
    });
    nine.addEventListener("click", () => {
        if (currentPlayer == "x") {
            nine.innerHTML = "x";
            gameboard.board[2][2] = 'x';
            currentPlayer = 'o';
        } else {
            nine.innerHTML = "o";
            gameboard.board[2][2] = 'o';
            currentPlayer = 'x';
        }
    });

    // add gameplay logic 
    // If player 1 fills a row, they win
    // else if player 2 does, they will
    // else, draw

}

gameplay();