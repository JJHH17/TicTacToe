// Making a player class 

function player(player1, player2) {
    const player1Name = player1;
    const player2Name = player2;

    // Manages scores
    let player1Score = 0;
    const getPlayer1Score = () => player1Score;
    const player1Point = () => player1Score++;

    let player2Score = 0;
    const getPlayer2Score = () => player1Score;
    const player2Point = () => player2Score++;

    return {player1, player2, player1Name, player2Name, getPlayer1Score, player1Point, getPlayer2Score, player2Point};
}