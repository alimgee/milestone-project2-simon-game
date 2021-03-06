<h1 align="center">
  <a href="" target="_blank"><img src="https://images-na.ssl-images-amazon.com/images/I/71zk4YBbEZL._SX425_.jpg" alt="Original Simon Box"/></a>
</h1>
<h2 align="center">
SIMON ONLINE
</h2>

<div align="center"> 

SIMON was a popular memory game in the 80s and still retains its appeal today. This is an online version of the game. Its basic premise is that the user must replicate the pattern of lights that the computer outputs, the pattern increase by 1 each round the user progresses. In this version of the game, to win on normal setting requireds that you replicate the computers selection for 10 consecutive rounds, if that's too easy you can set the difficulty level to hard and go all out for 20 rounds.

This is project is part of the 'Interactive Front-end Milestone 2' module of the Code Institute Full Stack Software Development course. The marks from this project contribute to the receipt of a diploma level award.
<br>


</div>

## Table of Contents
1. [**UX**](#ux)
    - [**Project Goals**](#project-goals)
    - [**User goals**](#user-goals)
    - [**User Stories**](#user-stories)
    - [**Design**](#design)
    - [**Wireframes**](#wireframes)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies used**](#technologies-used)

4. [**Testing**](#testing)
5. [**Coding Notes**](#coding-notes)

6. [**Deployment**](#deployment)


7. [**Acknowledgements**](#acknowledgements)

8. [**Disclaimer**](#disclaimer)

## UX

### Project Goals

The goal of this project from a developer learning perspetive is to utilize the understanding of interactive front-end using javascript gained during completing this section of the course.

The user end goal is to create a version of the Simon game online, that the user can interact with in a similar manner as the original game.

#### User goals

The aim is to create a simple memory game that is fun and simple to use and is made easier to complete successfully using a difficulty setting.

#### User Stories
1. When i come to the site i want the game board to be clearly displayed
2. I want to be able to select a hard or easy difficult level each time i play the game
3. I want the play button to be clearly labeled
4. I want to see my progress through the game displayed and for it to be clear if i have won or lost
5. The colour pads should be a similar colour to the original game and should make a sound to acknowledge a click
6. The computer selections should also make a sound when each pad lights up to make the memorization task a little easier
7. I would like to view a brief history of the game and also it would be helpful to have the the game rules visible if required

### Design
For the design I decided to keep it as clean and simple as possible. Initially i was using a a background image from the 80s movie 'Tron' to maintain an 80s feel but felt as the project progressed that the background image made the game a little cluttered looking. The game pads have the same colours as the original adopting a similar black background. The design is fully responsive across multiple devices.

**Fonts**
I decided to use the 'Righteous' font from google("https://fonts.googleapis.com/css?family=Righteous") as i felt that this closely resembled the original game font.

**Colours**
I went with a dark nav look and light blue background (#45a29e) on the body as i thought they best complemented the game board.

**Topography**
The site uses bootstrap 4 to be fully responsive across multiple devices, also some media queries were used to change the game board size, display section size and font sizes across different devices to provide a smooth user experience.

**Audio files**
The following sound files were used to replicate the original game sounds:
`https://s3.amazonaws.com/freecodecamp/simonSound1.mp3`, `https://s3.amazonaws.com/freecodecamp/simonSound2.mp3`, `https://s3.amazonaws.com/freecodecamp/simonSound3.mp3`, `https://s3.amazonaws.com/freecodecamp/simonSound4.mp3`.
This were found on the freecodecamp website https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-a-simon-game/

### Wireframes
WIreFrames were created using balsamiq tool with license key provided by the Code Institute. https://balsamiq.com/ and came be found in the /wireframes folder. https://github.com/alimgee/milestone-project2-simon-game/tree/master/wireframes

## Features
 
### Existing Features
1. Display section shows customer round level, and whether they have won or lost
2. All lights will flash and display section will flash red upon game completion
3. 'Play' button deactivates during play 
4. Each pad will flash and make a sound when selected by the use
5. Each pad will flash and make a sound when activated by the computer
6. User can access game rules via navigation item
7. User can access a brief history of the game via navigation item

### Features Left to Implement
1. ~~ Once game ends both the user selections and the computer selections are shown in the display section ~~
This new feature was added at end of the project due to having enough time to implement it.

## Technologies Used

- This project utilizes HTML, CSS and JavaScript programming languages.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to access the DOM and manipulate the game pads and display elements. 
 - [Bootstrap 4](https://getbootstrap.com/)
    - The project uses **Bootstrap** to simplify the structure of the website and make the website responsive easily. 
- [Cloud9](https://c9.io) 
    - On the course we use **Cloud9** as an IDE and virtual env
- [Google Fonts](https://fonts.google.com/)
    - The project used the Google 'Righteous' font across the site
- [GitHub](https://github.com/)
    - This project uses **GitHub** to remotely store the source code in a repository and also to display the game to the public  
 - [StackEdit](https://stackedit.io)
    - This project uses **StackEdit** to build the markdown for this readme file


## Testing 

As i was new to Javascript I had to create and adjust functions as i progressed through the game development, hence i was unable to use a TDD framework such as Jasmine. I fully tested all functions using console logs throughout verifying functions behave exactly as i expected them. Upon code completion  i implemented the below user testing.

 I have left in a console log of the computers array sequence which can be access via dev tools, for any further checking a tester might wish to do on my code outputs.

| Test       | Expected           |Passed  |
| :------------- |:-------------| :-----:|
| User selects 'play' button  | Game commences, computer activates fist pad, pad lighted is same as console logged computer sequence in chrome dev tools |  &#9745; 
| User selects 'play' button  | display shows current round number |  &#9745; 
| User selects 'play' button  | 'Play' button is disabled |  &#9745; 
| User replicates computer selection correctly whilst not yet reaching the 'win' state     | Computer moves to next 'round' and runs pattern sequence again with new pad selction added to the end of previous selection      |   &#9745;  |
| User  continues to replicates computer selection correctly and reaches round 10 when normal difficulty is selected     | User has won. All lights flash and display flashes red. 'Play' button re-activated     |   &#9745;  |
| User  continues to replicates computer selection correctly and reaches round 10 when 'hard' difficulty is selected    | Game continues to next round    |   &#9745;  |
| User  continues to replicates computer selection correctly and reaches round 20 when hard difficulty)     | User has won. All lights flash and display flashes red. Display shows text "winner"    |   &#9745;  |
|   User replicates computer selection correctly whilst not yet reaching the 'win' state       | Display shows next round number      |   &#9745;  |
| User selects different pad to computer selection | Game ends, 'Play' button re-enabled for new game   | &#9745; |
| User selects different pad to computer selection | Game ends, Display informs User they have lost   | &#9745; |
| User selects different pad to computer selection | Game ends, All light pads flash and display flashes red   | &#9745; |
| User selects 'Game Rules' in top navigation | Modal pops up showing game rules  | &#9745; |
| User selects 'Game History' in top navigation | Modal pops up showing game history  | &#9745; |
| User views game on Mobile  device| Game and page resizes and displays correctly as per device  | &#9745; |
| User views game on Desktop  device| Game and page resizes and displays correctly as per device  | &#9745; |

### Additional New feature testing
As i had some time i decided to go ahead and implement addtional new functionality which show the user the computer and the user selections at the end of the game in the display section.

| Test       | Expected           |Passed  |
| :------------- |:-------------| :-----:|
| User selects 'play' button  | Game commences with no change than normal on display section |  &#9745; |
| User selects 'play' button after completing a game  | display clears last user and computer selections and 'Round 1' is displayed |  &#9745; |
| User looses game  | display shows current user and computer selections and 'Loser Press 'Play' to start again.' text is displayed |  &#9745; |
| User wins game  | display shows current user and computer selections and 'Winner Press 'Play' to start again.' text is displayed |  &#9745; |



## Coding Notes
The game awaits for a user click on the 'play' button before anything occurs in the game.
~~~ playButton.click(function() {
    //if play button clicked and game hasnt started
    if (!playing) {
        playing = true;
        changeStatePlayButton();
        playGame();
    }
}); 
~~~
Once 'play' clicked the playGame function is called and the game commences. This function initializes the selection arrays which hold both the computer selections and the player selections. It then creates an array of 20 random numbers from 1 to 4, which are then passed into an array which will represent the computers selections.
The computer will also listen for clicks on the difficulty buttons to determine whether to pass the hard or normal variables into the difficulty variable.

~~~    for (var i = 0; i < 20; i++) {
        //placing random numbers between 1 -4 into computerSequence array
        computerSequence.push((getRndInteger(1, 4)));
    } 
  
~~~
Each number represents one of the 4 pads on the game board.The game round then commences as the gameRound function is called. This is the main engine of the gameplay.
~~~
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
~~~
gameRound function will display the 'Round' number in the display section using the level variable which keeps track of the round number. The computer will use the setTimeout javascript function to call the lghtColour function for 200ms which changes the colour of the relevant pad to make it appear as if its been 'lighted' up and also calls the audio file associated with that pad. 
~~~
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
~~~
The lightPad variable will keep track of the amount of pads which the computer has activated and if the round level and amount of lights activated match this means the computers turn is ended and the time interval set when the gameRound function is called is stopped and the light pad is defaulted back to its original colour by calling the defaultColour function which takes a pad number as a parameter and sets the colour based on this. The computer will then wait for the player to click on the pads. 

As long as the long as the amount of pads activated during the computers turn are less than the actual round number the computer will continue to light up the next pad in the sequence stored in the computerSequence array.

The computer listens for user clicks via the  pad1, pad2, pad3 and pad4 click functions
~~~
//listening for user click events

pad1.click(function() {
    //only doing something when its not the computers turn and the play button is pressed
    if (!computerTurn && playing) {
        audio1.play();// playing sound
        padUserClick(1, "pink"); // function to carry out actions after click
    }
});
~~~
If a pad is clicked on, the relevant audio file is played and the pad is lighted up by calling the padUserClick function which takes the id of the pad and the colour which it should be changed to. The padUserClcik function then changes the colour of the pad to the 'lighted' colour and changes it back to its default colour after 300ms, the users selection is then added the the playerSequence array. 
~~~
function padUserClick(num, colour) { // colour pad to 'ligth' after click
    pad(num, colour); //changing pad colour
    setTimeout(function() {
        defaultColour(num); //after 300ms set bg colour back to default
    }, 300);

    playerSequence.push(num); // passing user selections into array for later checking
    checkSelection(); //checking user guesses
}
~~~
The checkUser function is finally called to check if the users selection matches whats in the computerSequence array.

~~~
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
        showTextInDisplay("Loser!");
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
~~~
The checkSelection function will first compare the last click added to the playerSequence array to what is in that current possition in the computerSequence array and sets the match varialbe to false if they dont match. 

If the match variable is false all lights are flashed via the flashLights function, the restartGame function is called and the diaplay text is updated via the showTextDisplay function to show the player that they have lost.

If the lengh of the playerSequence matches the difficulty setting (10 for 'normal' or 20 for 'hard'), and also the match variable has not been changed to false this means the customer has won and is informed via the winGame function.

If the user has not yet won as there are still some rounds left then the level variable is increased, the playerSequence array emptied, and the gameRound function is then called agian and once again its the computers turn.

GameRound function will continue to loop as long as the user guesses correctly and the wining level has not been reached.
## Deployment

This site was built using C9 virtual env. Git was used for source control and all content was push to github
The repos on github can be found at https://github.com/alimgee/milestone-project2-simon-game and the site can be seen at [https://alimgee.github.io/milestone-project2-simon-game/](https://alimgee.github.io/milestone-project2-simon-game/)

To deploy you can select the 'clone' option on the repo and clone into your local env by following the instructions at https://help.github.com/en/articles/cloning-a-repository


### Acknowledgements

<strong>Code Institute</strong> mentors and tutors for their assistance in getting me this far in the course.
All the folk in the <strong>Code Institute Slack </strong> for their invaluable input to their fellow members development.


#### Disclaimer
The content of this website is educational purposes only.



