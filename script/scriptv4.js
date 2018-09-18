
// first lets define all the new variables:
$(document).ready(function(){



    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let words = ['function', 'parameter', 'integer', 'variable', 'constant', 'argument', 'array', 'object', 'recursion', 'scope']; // aka categories. category
    // let wordSelected;
    let guess;             // Selected word from the array of answers. aka word
    let placeholder ;             // aka guessed letters
    let clickedArray = [ ];  // putting all the correct clicked letters
    let clickedLetter;
    let randomWord;
    let lengthOfRandomWord;
    let span;
    let spanString;
    let wordBox;
    let endState = 0;
    let correctLetters = [ ]; //store the correct clicked letters
    let image = new Array();
      image[0] = '<img src="img/image0.png" data="0" width="415" height="496">';
      image[1] = '<img src="img/image1.png" data="1" width="415" height="496">';
      image[2] = '<img src="img/image2.png" data="2" width="415" height="496">';
      image[3] = '<img src="img/image3.png" data="3" width="415" height="496">';
      image[4] = '<img src="img/image4.png" data="4" width="415" height="496">';
      image[5] = '<img src="img/image5.png" data="5" width="415" height="496">';
      image[6] = '<img src="img/image6.png" data="6" width="415" height="496">';
      image[7] = '<img src="img/image7.png" data="7" width="415" height="496">';
      image[8] = '<img src="img/image8.png" data="8" width="415" height="496">';
      image[9] = '<img src="img/image8.png" data="9" width="415" height="496">';
    // let NumberOfChances = image.length;

    // wordSelected = words[Math.floor(Math.random() * words.length)];

    const populateWordBox = function () {

      wordBox = $('#wordbox');
      let randomIndex = Math.floor(Math.random() * words.length);
      randomWord = words[randomIndex];
      lengthOfRandomWord = words[randomIndex].length;

      console.log(randomWord);

      for (let i = 0; i < lengthOfRandomWord; i++) {
        let spanString = '<span class="underscore-for-letter" id="span' + i + '">'
        span = $(spanString);
        span.appendTo(wordBox);
      }
    };

    const replaceImage = function () {
      let data = $("#hangman > img").attr('data');
      data = parseInt(data);
      data++;
      $("#hangman").html(image[data]);
      if (data === 9){

        if (confirm("You Lose. Want to play again?")) {
            endState = 1;
            console.log("You pressed OK!")
            resetGame();
        } else {
            endState = 0;
            console.log("You pressed Cancel!")
        }
        }

    };



    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });


    const clickFunction = function () {
      let list = $('.letter');
      // for (let i= 0; i < list.length; i++){
        list.bind ('click', function() {

          clickedLetter = this.innerText;
          $(this).unbind("click");
          $(this).css('visibility', 'hidden');
          console.log(clickedLetter);

          if (checkLetter() === false){
          //draw another piece.
            replaceImage ();
          };
          // console.log(clickedLetter);
        });
    };

    const checkLetter = function () {
      let foundLetter = false;
        for (let i = 0; i < lengthOfRandomWord; i++){
          let spanId = '#span' + i;
          // spanId.appendTo(span);
          // console.log(lengthOfRandomWord);
            if (clickedLetter === randomWord[i]){
              // correctLetters.push(clickedLetter);
              // console.log(randomWord[i]);
                $(spanId).text(clickedLetter);
                foundLetter = true;
            // if (correctLetters.length === randomWord.length) {
            //   alert ('congrats you win!')
            // }
            };
        };
        if (foundLetter){
          return true;
        } else {
          return false;
        };
    }


    play = function (){
      populateWordBox();
      clickFunction();
    }

    window.onload = play();






    const resetGame = function(){

      let reset = $('#reset');

        console.log(endState)
        reset.bind ('click', function() {
          // correctLetters = [];
          $(this).unbind("click");
          $('span').remove();
          $('.letter').css('visibility', 'visible');
          $("#hangman").html(image[0]);
          play();
        })

    }

});

