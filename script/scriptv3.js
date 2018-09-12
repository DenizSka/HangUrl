var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var codingWords = ['function', 'parameter', 'argument', 'array'] // aka categories. category
var wordSelected;
var guess;             // Selected word from the array of answers. aka word
var placeholder;             // aka guessed letters
var clickedArray = [ ]; // putting all the correct clicked letters
var underScore;
var clickedLetter;
var wordBox;

wordSelected = codingWords[Math.floor(Math.random() * codingWords.length)];

var alphabetButtons = function () {
  buttons = document.getElementById('alphabet');
  lettersUl = document.createElement('ul');
  for (var i= 0; i < alphabet.length; i++){
    li = document.createElement ('li');
    lettersUl.id = 'keyboard';
    li.className = 'letter'
    li.innerText = alphabet[i];
    buttons.appendChild(lettersUl);
    lettersUl.appendChild(li);
  }
}
alphabetButtons();

function wordBoxs (){
  wordBox = document.getElementById('wordbox');
    for (var i = 0; i < wordSelected.length; i ++) {
      placeholder = document.createElement('div');
      wordBox.appendChild(placeholder);
      placeholder.setAttribute('class', 'placeholder');
      clickedArray.push(placeholder);
      console.log (placeholder);
    };
}
wordBoxs();


function forUnderScore(){
  for (var i = 0; i < wordSelected.length; i ++) {
    underScore += '_'
    }
 };
forUnderScore();


var checkClickedLetter = function () {
li = document.getElementsByClassName('letter');
  for (var i= 0; i < li.length; i++){
    li[i].addEventListener('click', function(){
      clickedLetter = this.innerText;
    });
  };
}
checkClickedLetter();

//  var winLose = function () {
// // //NOW We want to add a click function to the keyboard.
// li = document.getElementsByClassName('letter');
//   for (var i= 0; i < li.length; i++){
//     li[i].addEventListener('click', function(){
//       var clickedLetter = this.innerText;
//       console.log(clickedLetter)
//         for (var j = 0; j < wordSelected.length; j++){
//           if(wordSelected[i] == clickedLetter){
//             underScore[i] = clickedLetter
//           };
//         };
//     });
//   }
//     renderUnderScore();
// }

// winLose();


function checkWinLose (){
  for (var i = 0; i < wordSelected.length; i ++) {
    if(wordSelected[i] == clickedLetter){
      underScore[i] = clickedLetter
    };
  };
  renderUnderScore();
}
checkWinLose ();

function renderUnderScore (){
  var wordBox = document.getElementById('wordbox');
  wordBox.innerHTML = underScore;
}
