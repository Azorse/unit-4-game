var currentScore;
var targetScore;
var gamesWon;
var gamesLost;





function beginGame() {
    currentScore = Math.floor((Math.random() * 102) + 19)


}


function reset () {
    currentScore = 0;
    targetScore = 0;

}

function endGame() {
    if (currentScore === targetScore) {
        $('#game-status').innerHtml('You Won!');
        gamesWon++;
        $('#wins').innerHtml(gamesWon);
      
    } else {
        $('#game-status').innerHtml('You Lost!');
        gamesLost++;
        $('#losses').innerHtml(gamesLost);
    }
    reset();
}

$(document).ready(function() {
    beginGame();





    $('#crystal1').on('click', function() {
        currentScore += cry1
    });

    $('#crystal2').on('click', function() {
        currentScore += cry2
    });

    $('#crystal3').on('click', function() {
        currentScore += cry3
    });

    $('#crystal4').on('click', function() {
        currentScore += cry4
    });



    if (currentScore >= targetScore) {
        endGame();
    }
});








