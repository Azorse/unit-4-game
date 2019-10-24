var currentScore = 0;
var targetScore = 0;
var gamesWon = 0;
var gamesLost = 0;

var crystals = {}



function reset() {
    currentScore = 0;
    $('#current-score').html('');
    beginGame();
}

function gameStatus () {
    if (currentScore >= targetScore) {
        endGame();
    }
}

function beginGame() {
    
    targetScore = Math.floor((Math.random() * 102) + 19)
    $('#target-score').html(targetScore);
    console.log(targetScore);

    for (var i = 1; i < 5; i++) {
        var value = "cry" + i;
        crystals[value] = Math.floor(Math.random() * 12 + 1);

    }
    console.log(crystals);
}

function endGame() {
    if (currentScore === targetScore) {
        $('#game-status').html('You Won!');
        gamesWon++;
        $('#wins').html(gamesWon);
        
      
    } else {
        $('#game-status').html('You Lost!');
        gamesLost++;
        $('#losses').html(gamesLost);
    
        
    }
    reset();
    
}

function update() {
    $('#current-score').html(currentScore);
    console.log(currentScore)
    gameStatus();
}

$(document).ready(function() {

    beginGame();
    if (currentScore < targetScore) {
        $('#crystal1').click(function() {
            currentScore += crystals.cry1
            update();
        });

        $('#crystal2').click(function() {
            currentScore += crystals.cry2
            update();
        });

        $('#crystal3').click(function() {
            currentScore += crystals.cry3
            update();
        });

        $('#crystal4').click(function() {
            currentScore += crystals.cry4
            update();
        
        });
    } 
    

});
