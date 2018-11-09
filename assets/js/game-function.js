//Grab reference to my DOM Elements
var $newGameButton = document.getElementById("new-game-buton");
var $placeholders = document.getElementById("placeholders");
var $guessedLetters= document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");




// Create variables for game (wordBank,wins,losses,pickedWord,guessesLeft,gameRunning,pickedWordPlaceholder, guessedLetterBank, incorrectLetterBank)

var wordBank = ['cloud','barret','tifa','aerith','nanaki','cid','yuffie','vincent','sephiroth','jenova','meteor','zack','chocobo','materia','weapon','ruby','emerald','diamond','ultimate','lifestream','sapphire','shinra','midgar','crater','final fantasy seven','black materia'];
var wins = 0;
var losses = 0;
var guessesLeft = 16;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

// newGame function to resert all stats, pick new word and create placeholders
function newGame() {
    //Game Reset
    gameRunning = true;
    guessesLeft = 16;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArr = [];

    //Pick a new word
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    // Create palceholders out of new pickedWord 

    
    for (var i = 0; i < pickedWord.length; i++) {
        if(pickedWord[i] === '') {
            pickedWordPlaceholderArr.push('');
            } else {
        pickedWordPlaceholderArr.push('_');
    }
}

// Write all new game info to the DOM
$guessesLeft.textContent = guessesLeft;
$placeholders.textContent = pickedWordPlaceholderArr.join('');
$guessedLetters.textContent = incorrectLetterBank;
}


// letterGuess function, takes int he letter you pressed and sees if it's in the selected word

function letterGuess(letter) {
    
    
    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1){
//Run Game
guessedLetterBank.push(letter);
     
//Check if guessed letter is in my picked word
for (var i = 0; i < pickedWord.length; i++) {
    //Convert both values to lower case
    if (pickedWord[i].toLocaleLowerCase() === letter.toLocaleLowerCase()) {
        
//If it matches a character it'll swap out that placerholder with the letter
        pickedWordPlaceholderArr[i] = pickedWord[i];
    }
}
$placeholders.textContent = pickedWordPlaceholderArr.join ('');
}else {
        if ( gameRunning === false) {
            alert("The game isn't running, click on the New Game button to start over."); 
        } else {
            alert("You've already guessed this letter, try a new one!");
        }
    }
}


// checkIncorrect (letter)
function checkIncorrect(letter) {
    // Check to see if letter didn't make it into our pickedWordPlaceHolder 
    if (
        pickedWordPlaceholderArr.indexOf(letter.toLocaleLowerCase()) === -1
         &&
          pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1) {
           //Decrements guesses
            guessesLeft--;
            //Add incorrect letter to incorrectLetterBank
            incorrectLetterBank.push(letter);
           // Writes amount of  wrong guesses to DOM
            $guessedLetters.textContent = incorrectLetterBank.join(' ');
            //Write new amount of guesses left to DOM
            $guessesLeft.textContent = guessesLeft;
          }
        }

checkLose


checkWin



// Add event listener for new game button
$newGameButton.addEventListener("click", newGame);

// Add onkeyup event to trigger letterGuess

