
// first lets define all the new variables:
// $(document).ready(function()){}
// change var to let.
//each time there is a loop going on put $.

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var codingWords = ['function', 'parameter', 'argument', 'array', 'object', 'recursion', 'scope'] // aka categories.
var wordSelected;
var guess;             // Selected word from the array of answers. aka word
var placeholder ;             // aka guessed letters
var clickedArray = [ ];  // putting all the correct clicked letters


//create var to keep track of the letters that remain to be guessed


wordSelected = codingWords[Math.floor(Math.random() * codingWords.length)];
// var gameBoard = new Array(wordSelected.length);
//Show the letters of the alphabet on the side of the page.
//Define the place, and create the uls for each letter. give them var using jquery.
var alphabetButtons = function () {
  buttons = document.getElementById('alphabet');
  lettersUl = document.createElement('ul');

  //now create li for each letter in alphabet.
  for (var i= 0; i < alphabet.length; i++){
    li = document.createElement ('li');
    // give each ul and li id.
    lettersUl.id = 'keyboard';
    // li.id = 'letter';
    li.className = 'letter'
    //write all the letters inside each li.
    li.innerText = alphabet[i];
    winLose ();
    //add all the li and ul we just created under div buttons.
    buttons.appendChild(lettersUl);
    lettersUl.appendChild(li);
  }
}
alphabetButtons();

//alphabet is ready. But what about the answer? Where will that appear?
// Ideally below the alphabet keywords.

//keep track of the letters that remain to be guessed.
var remainingLetters = wordSelected.length;
//now lets make a function about the guessedWord and where it will be stored: (lets call the function inplay)
var inPlay = function (){
//we will put the box inside the div id: hold.
  wordBox = document.getElementById('wordbox');
//make a new ul that will go under this div.
  ulWordBox = document.createElement('ul');
  ulWordBox.setAttribute('id', 'ulWordBox');

//loop over each letter in the selected word and create li for each. each li should have its own class.
  for (var i = 0; i < wordSelected.length; i ++) {
    placeholder = document.createElement('li');
    placeholder.setAttribute('class', 'placeholder');
     // placeholder.innerText = '_';
     placeholder[i] = '_';
    // placeholder.innerText = wordSelected;
    // guessed.classList.add('LetterWord');  why do i need this
    // if the letter in the selected word is equal to the guessed letter. add it using innerHtml to li.
    //       if(wordSelected[i] == guessed[i]){
    //         guessed.innerHtml = guessed[i];
    // else if it is not equal than add "_"
    //       } else{
    //         guess.innerHtml = "_"
    //       }
    // push all the guesses in to guessArray.
      clickedArray.push(placeholder);
    // dont forget to append child the ul and li.
      wordBox.appendChild(ulWordBox);
      ulWordBox.appendChild(placeholder);
   }
}
inPlay();


//SO FAR:
// we have the wordbox that will store the selected word and the correctly guessed letters.
//randomly selected word for the player from the array of coding words.
// Alphabet keyboard. that does not work yet.

// var winLose = function () {
// //NOW We want to add a click function to the keyboard.
// li = document.getElementsByClassName('letter');
//   for (var i= 0; i < li.length; i++){
//     li[i].addEventListener('click', function(){
//       var clickedLetter = this.innerText;
//         for (var j = 0; j < wordSelected.length; j++){
//           if (clickedLetter == wordSelected[j]){
//             // use j to update the game board with clickedLetter
//             // gameBoard[j] = wordSelected[j]
//             // placeholder.innerText = wordSelected[j]
//             placeholder.innerText += wordSelected[j]

//             console.log(gameBoard);
//             console.log(placeholder);
//           };
//         };
//     });
//   };
// }
// winLose();


 var winLose = function () {
  // while (remainingLetters>0){ //NEW
  // show the player their progress : NEW
  // wordBox = document.getElementById('wordbox');
  // wordBox.innerHTML = placeholder.join(' ');

  // We want to add a click function to the keyboard.
  li = document.getElementsByClassName('letter');
    for (var i= 0; i < li.length; i++){
      li[i].addEventListener('click', function(){
        var clickedLetter = this.innerText;
          for (var j = 0; j < wordSelected.length; j++){
            if (clickedLetter === wordSelected[j]){
            // use j to update the game board with clickedLetter
            // gameBoard[j] = wordSelected[j]

            placeholder[j] = clickedLetter
            // remainingLetters--;
            console.log(clickedLetter);
              };
            };
          });
      /*placeholder.innerText = wordSelected*/
      };
  // for (var k = 0; k < clickedArray; k++) {
  // placeholder.innerText = clickArray[k];
// };
// }
};
// winLose();

//   li.addEventListener('click', function(){
// //let's give a var to the clicked keyboard. (don't wanna mention it as .innerhtml each time)
//     var clickedLetter = (this.innerText);
// // With each click make that letter dissapear.
//   // clickedLetter = null;
//  // Loop through the wordbox to see if the letter exists in wordbox:
//     for (var i = 0; i < wordBox.length; i++){
//       if (clickedLetter === wordbox[i]){
// //Add it in to the guessarray. (this is the worbox)
//         guessArray[i].innerHTML = clickedLetter;
//       }
//     }
//   });
// }
//   winLose ();
// button = document.querySelector('button');
// button.addEventListener('click', function(){
//   ulWordBox.removeChild(ulWordBox);
//   lettersUl.removeChild(lettersUl);
//   everything();
// }

// var play = function () {
//   wordSelected = codingWords[Math.floor(Math.random() * codingWords.length)];
