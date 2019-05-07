let playButton = $(".start-button");
let playButtonText = $(".start-text");
let playing = false;
let computerSequence = [];


// checking for clicks on 'play button'
playButton.click(function() {
    //if play button clicked and game hasnt started
    if (!playing) {
        playing = true;
        changeStatePlayButton();
        playGame();
    }
});

//function to set game in play
function playGame() {

    // generate computer array sequence - loop 20 times as that is the max for the game
    for (var i = 0; i < 20; i++) {
        //placing random numbers between 1 -4 into computerSequence array
        computerSequence.push((getRndInteger(1, 4)));
    }
    //testing computer sequence array by converting to string and sending to console
    console.log(computerSequence.toString() +" length = " + computerSequence.length );

}

//function to alternate to look of the play button during active play
function changeStatePlayButton() {
    if (playing) { //if user clicks on play button
        playButtonText.css("color", "red");
    }
    else { //do not respond to further clicks till game is over and playing var is set to false
        playButtonText.css("color", "white");
    }
}

//random function generator from w3c schools
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
