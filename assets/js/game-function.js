//Grab reference to my DOM Elements
var $newGameButton = document.getElementById('new-game-buton');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters= document.getElementById('guessed-letters');
var $guessesLeft = document.getElementById('guesses-left');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');






// Create variables for game (wordBank,wins,losses,pickedWord,guessesLeft,gameRunning,pickedWordPlaceholder, guessedLetterBank, incorrectLetterBank)

var wordBank= ['cloud','barret','tifa','aerith','nanaki','cid','yuffie','vincent','sephiroth','jenova','meteor','zack','chocobo','materia','weapon','ruby','emerald','diamond','ultimate','lifestream','sapphire','shinra','midgar','crater','final fantasy seven','black materia'];

var wins= 0;
var losses= 0;
var guessesLeft= 16;
var gameRunning= false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];

// newGmae functiion to resert all stats, pick new word and create placeholders



// letterGuess function, takes int he letter you pressed and sees if it's in the selected word



//checkLose


//checkWin



//Add event listener for new game button


//Add onkeyup event to trigger letterGuess
