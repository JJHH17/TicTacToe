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
}

gameplay();