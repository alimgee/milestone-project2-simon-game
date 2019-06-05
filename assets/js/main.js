let playButton = $(".start-button");
let playButtonText = $(".start-text");
let pad1 = $(".pad1");
let pad2 = $(".pad2");
let pad3 = $(".pad3");
let pad4 = $(".pad4");
let displayText = $(".display-text");
let playing = false;
let computerSequence = [];
let playerSequence = [];
let computerTurn = false;
let interval = 0;
let lightPad = 0;
let level = 1;
let win = false;
let hard = 20;
let normal = 10;
let difficulty = normal;
const audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

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
    playerSequence = [];
    computerSequence = []; //array to store pad number of user clicks
    level = 1;
    lightPad = 0;
    win = false;
    
    $(".comp").css("display" , "none");
    $(".user").css("display" , "none");
    $(".compSelect").css("display" , "none");
    $(".userSelect").css("display" , "none");
 

    // generate computer array sequence - loop 20 times as that is the max for the game
    for (var i = 0; i < 20; i++) {
        //placing random numbers between 1 -4 into computerSequence array
        computerSequence.push((getRndInteger(1, 4)));
    }
    //begin computer turn by using set interval to loop throught the level
    computerTurn = true;
    interval = setInterval(gameRound, 1000);
    console.log(computerSequence.toString());//sending to console for testing
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
    
    showTextInDisplay("Round " + level);
    if (lightPad == level) { //computer has completed a level once its lighted up same amoun of lights as level
        //stop interval
        clearInterval(interval);
        defaultColour(computerSequence[lightPad - 1]); //sets last lighted colour back to default
        computerTurn = false;
    }
    if (computerTurn && playing == true) {
        //light up a relevant light using timeout function
        //clear last pad colour bg css back to default
        setTimeout(lightColour, 200); //switch light on for 200ms
        defaultColour(computerSequence[lightPad - 1]); //clear last pad to its default background colour
        lightPad++;
    }

}

function lightColour() {

    if (computerSequence[lightPad - 1] == 1) { pad(1, "pink");
        audio1.play(); }
    if (computerSequence[lightPad - 1] == 2) { pad(2, "lightgreen");
        audio2.play(); }
    if (computerSequence[lightPad - 1] == 3) { pad(3, "lightblue");
        audio3.play(); }
    if (computerSequence[lightPad - 1] == 4) { pad(4, "yellow");
        audio4.play(); }

}

function pad(padNumber, colour) { //function takes pad id number and relevant colour and change css bg colour

    $(".pad" + padNumber).css("background-color", colour);

}

function defaultColour(padNumber) { //function takes pad id number and uses pad() function to reset colour

    
    if (padNumber == 1) pad(1, "darkred");
    if (padNumber == 2) pad(2, "darkgreen");
    if (padNumber == 3) pad(3, "darkblue");
    if (padNumber == 4) pad(4, "goldenrod");
}

//listening for user click events

pad1.click(function() {
    //only doing something when its not the computers turn and the play button is pressed
    if (!computerTurn && playing) {
        audio1.play();// playing sound
        padUserClick(1, "pink"); // function to carry out actions after click
    }
});

pad2.click(function() {
    //only doing something when its not the computers turn and the play button is pressed
    if (!computerTurn && playing) {
        audio2.play();
        padUserClick(2, "lightgreen");
    }
});

pad3.click(function() {
    //only doing something when its not the computers turn and the play button is pressed
    if (!computerTurn && playing) {
        audio3.play();
        padUserClick(3, "lightblue");
    }
});

pad4.click(function() {
    //only doing something when its not the computers turn and the play button is pressed
    if (!computerTurn && playing) {
        audio4.play();
        padUserClick(4, "yellow");
    }
});

function padUserClick(num, colour) { // colour pad to 'ligth' after click
    pad(num, colour); //changing pad colour
    setTimeout(function() {
        defaultColour(num); //after 300ms set bg colour back to default
    }, 300);

    playerSequence.push(num); // passing user selections into array for later checking
    checkSelection(); //checking user guesses
}

function checkSelection() { // function to check user clicks and compare to computer array sequence
    var match = true;
    if (playerSequence[(playerSequence.length - 1)] !== computerSequence[(playerSequence.length - 1)]) {
        match = false; // if wrong click there is no match
    }
    if (playerSequence.length == difficulty && match) {
        //player has made all the right guesses. Guesses to win set to 3 for testing purposes
        winGame();
    }

    if (!match) {
        //restart game and print loser to display screen if wrong click
        flashLights();
        restartGame();
        showTextInDisplay(`Loser!<br><span class="small"> Press <kbd>'Play'</kbd> to start again.</span>`);
        addSelectConent();
    }
    if (match && playerSequence.length == level && !win) {
        //repeat game function if guesses are right but user has not yet won
        level++; // move up a level for the next cycle
        playerSequence = []; //empty players sequence for next round of clicks
        computerTurn = true; //its computers turn next
        lightPad = 0; //setting counter back to default for next cycle
        interval = setInterval(gameRound, 1000); //running game round again with an extra pad lighting
    }

}

function showTextInDisplay(text) {

    displayText.html(text);
}

function winGame() {
    win = true;
    restartGame(); //start game over and print winner to display
    showTextInDisplay(`Winner! <br><span class="small"> Press <kbd>'Play'</kbd> to start again.</span>`);
    flashLights();
    addSelectConent();

}

function restartGame() {
    playing = false; // ending game and changing play button state
    changeStatePlayButton();
}

function lightAllColours() { //changes pads to their lighted state and also changes display section colour
    pad(1, "pink");
    pad(2, "lightgreen");
    pad(3, "lightblue");
    pad(4, "yellow");
    $(".display-section").css("background-color", "red");
}

function defaultAllColours() { //changes pads and display section back to their default colours
    pad(1, "darkred");
    pad(2, "darkgreen");
    pad(3, "darkblue");
    pad(4, "goldenrod");
    $(".display-section").css("background-color", "#c4c7ce");

}

function flashLights() { // gives the impression of the pads flashing
    lightAllColours();
    setTimeout(function() {
        defaultAllColours();
        //after 300ms set bg colours back to default
    }, 300);

}
// listening to clicks on difficulty buttons
$(".difficulty-select1").click(function() { //normal is selected
    difficulty = normal;
    $(".difficulty-select1").css("background-color", "red");
    $(".difficulty-select2").css("background-color", "grey");
});
$(".difficulty-select2").click(function() { //hard is selected
    difficulty = hard;
    $(".difficulty-select1").css("background-color", "grey");
    $(".difficulty-select2").css("background-color", "red");
});

//adding new feature - function to allow users to see both theirs and the computers
//sections when game ends

function addSelectConent(){
    $(".selections").css("display" , "block");//display oll html containers for selection section
    $(".comp").css("display" , "block");
    $(".user").css("display" , "block");

    // call function that loops through selection arrays and displays httml to the dom based on array content
    loopSelectionArray(computerSequence, ".compSelect");
    loopSelectionArray(playerSequence, ".userSelect");
   
}

function loopSelectionArray(array, ident){
    var selectStr="";
    var padNum =0;
    for (var i=0; i<level; i++){
        padNum = array[i];
        // loop and set html base on pad number in array. Add all html to variable selectStr
        if (padNum==1){
            selectStr +=   `<div class="red"></div>`;
        }
        if (padNum==2){
            selectStr += `<div class="green"></div>`;
        }
        if (padNum==3){
            selectStr +=  `<div class="blue"></div>`;
        }
        if (padNum==4){
            selectStr += ` <div class="yellow"></div>`;
        }
        
    }
    $(ident).css("display" , "block");// display relevant selectin div
    $(ident).html(selectStr);// send string of html to the DOM of relevant element
}