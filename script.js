// Making a player class 

function player(player1, player2) {
    // User alerts/prompts to get this info from user
    const player1Name = player1;
    const player2Name = player2;

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



    return {player1, player2, player1Name, player2Name, getPlayer1Score, player1Point, getPlayer2Score, player2Point, 
        player1Icon, player2Icon, drawScore, getDrawScore, drawScorePoint};
}
let newPlayer = player('James', 'Melissa');


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