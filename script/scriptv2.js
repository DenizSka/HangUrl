// var arrayWords = ['book', 'name', 'table', 'tree']

//first let's play with only one word.

//define the array with the word and array with the guesses that player will make.
var guessLettersWord = ['a', 'p', 'p', 'l', 'l', 'e'];
var guessed = ['_', '_', '_', '_', '_', '_'];

let playerGuess = $('#guess').text;


//looping through each letter in the answer word to check if the player's input letter matches the letters in the array.

function guessLetter(letter){
var goodGuess = false;
var moreToGuess = false;
  for (var i = 0; i < guessLettersWord.length; i++) {
    //each time player guesses a letter:
    // if that letter matches the answer word we are adding that into the guessed box
    // this guesses box is the one that appears in the page.
    if (guessLettersWord[i] == letter){
      guessed[i] = letter;

      //when we find the right letter, change goodGuess variable to true so we can use this shortcut in out next evaluation.
      goodGuess = true;
    }
    // If there are '_' empty elements in the array guessed, than you have to guessmore.
    //We are simply changing var moreToGuess to true.
    if (guessed[i] == '_') {
        moreToGuess = true;
    }
  }

  //now, let's decide what to do when there is a goodGuess (goodguess is true) and when there are no more '_' empty elements left in the guessed array.
  if (goodGuess){
    console.log('found letter');
    console.log(guessed.join(''));
      if (!moreToGuess) {
      console.log('you won')
      }
  //if you did not make a good guess than continue guessing.
  } else {
   console.log ('keep trying')
  }
}

guessLetter ('t');
