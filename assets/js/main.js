
let playButton = $(".start-button");
let playButtonText = $(".start-text");
let pad1 = $(".pad1");
let pad2 = $(".pad2");
let pad3 = $(".pad3");
let pad4 = $(".pad4");
let playing = false;
let computerSequence = [];
let playerSequence = [];
let computerTurn = false;
let interval = 0;
let turn = 0;
let lightPad = 0;
let level = 1;


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
    playerSequence = []; //array to store pad number of user clicks
    level = 4; //level will increase with each repetition of the set interval loop

    // generate computer array sequence - loop 20 times as that is the max for the game
    for (var i = 0; i < 20; i++) {
        //placing random numbers between 1 -4 into computerSequence array
        computerSequence.push((getRndInteger(1, 4)));
    }
    //begin computer turn by using set interval to loop throught the level
    computerTurn = true;
    interval = setInterval(gameRound, 1000);
    console.log(computerSequence.toString());
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

function gameRound() {
    console.log("in game round Light pad is " + lightPad);
    if (lightPad == level) { //computer has completed a level once its lighted up same amoun of lights as level
        //stop interval
        clearInterval(interval);
        defaultColour(computerSequence[lightPad-1]); //sets last lighted colour back to default
        computerTurn = false;


    }
    if (computerTurn) {
        //light up a relevant light using timeout function
        //clear last pad colour bg css back to default
        console.log("in comp turn")
        setTimeout(lightColour, 200); //switch light on for 200ms
        defaultColour(computerSequence[lightPad-1]); //clear last pad to its default background colour
        lightPad++;
    }
}

function lightColour() {

    if (computerSequence[lightPad-1] == 1) pad(1, "pink");
    if (computerSequence[lightPad-1] == 2) pad(2, "lightgreen");
    if (computerSequence[lightPad-1] == 3) pad(3, "lightblue");
    if (computerSequence[lightPad-1] == 4) pad(4, "yellow");
    
}

function pad(padNumber, colour) { //function takes pad id number and relevant colour and change css bg colour

    $(".pad" + padNumber).css("background-color", colour);
}

function defaultColour(padNumber) { //function takes pad id number and uses pad() function to reset colour

    console.log("default colour function called. pad number is " + padNumber)
    if (padNumber == 1) pad(1, "darkred");
    if (padNumber == 2) pad(2, "darkgreen");
    if (padNumber == 3) pad(3, "darkblue");
    if (padNumber == 4) pad(4, "goldenrod");
}

//listening for user click events

pad1.click(function() {
    //only doing something when its not the computers turn and the play button is pressed
    if (!computerTurn && playing) {
        padUserClick(1, "pink"); // function to carry out actions after click
    }
});

pad2.click(function() {
    //only doing something when its not the computers turn and the play button is pressed
    if (!computerTurn && playing) {
        padUserClick(2, "lightgreen");
    }
});

pad3.click(function() {
    //only doing something when its not the computers turn and the play button is pressed
    if (!computerTurn && playing) {
        padUserClick(3, "lightblue");
    }
});

pad4.click(function() {
    //only doing something when its not the computers turn and the play button is pressed
    if (!computerTurn && playing) {
        padUserClick(4, "yellow");
    }
});

function padUserClick(num, colour) {
    pad(num, colour);
    setTimeout(function() {
        defaultColour(num); //after 300ms set bg colour back to default
    }, 300);
    console.log(num)
    playerSequence.push(num); // passing user selections into array for later checking
    console.log(playerSequence.toString());
    checkSelection();
}

function checkSelection() {


}
