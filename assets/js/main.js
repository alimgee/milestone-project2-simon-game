let playButton = $(".start-button");
let playButtonText = $(".start-text");
let playing = false;


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
function playGame(){
    
    // testing play function after start click
    console.log("Im playing. Play is " + playing);
}

function changeStatePlayButton(){
    console.log("Im in change state");
    if (playing==true){
        playButtonText.css("color" , "red");
        console.log("Im in change state first if text should be red");
    }
    else{
        playButtonText.css("color" , "white");
    }
}






