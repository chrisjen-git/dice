
var player1Score = 0;
var player2Score = 0;

function rollDice(playerNumber) {
    var roll = Math.floor(Math.random() * 6) + 1;

    if (playerNumber === 1) {

        player1Score += roll;
        document.getElementById('player1Score').innerText = player1Score;
        document.getElementById('update1').innerText = "Player 1 rolled " + roll;

        if (player1Score >= 100) {
            document.getElementById('winner').innerText = 'Player 1 wins!';
            document.getElementById('winner').style.color = 'green';
            document.getElementById('rollDice1').disabled = true;
            document.getElementById('rollDice2').disabled = true;
        }

    } else {

        player2Score += roll;
        document.getElementById('player2Score').innerText = player2Score;
        document.getElementById('update2').innerText = "Player 2 rolled " + roll;

        if (player2Score >= 100) {
            document.getElementById('winner').innerText = 'Player 2 wins!';
            document.getElementById('winner').style.color = 'green';
            document.getElementById('rollDice1').disabled = true;
            document.getElementById('rollDice2').disabled = true;
        }

    }
}