// test connection - successful
//console.log("hello")

// variables
const keys = document.querySelectorAll(".keys");
let answer = "";
let guessed = [];
let wordStatus = null;
let bodyCount = 1;

// word array
//let word = ["WRECK", "HISTORY", "APPLE", "WALRUS"];
let word = ["CAT", "DOG"];

// word randomizer
function randomWord() {
  answer = word[Math.floor(Math.random() * word.length)];
}

randomWord();

// keyboard buttons opacity
addEventListener("click", (event) => {
  var selectedButton = document.getElementById(event.target.id);
  console.log("button", event.target.id);
  selectedButton.style.opacity = ".5";
  validateInput(event.target.id);
});

// word to guess
function guessWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");
  document.getElementById("wordSpotlight").innerHTML = wordStatus;
  console.log(wordStatus);
}

guessWord();

// keyboard input
function validateInput(letterSelected) {
  //Option 1
  // if ( answer.includes( letterSelected ) ){
  //     if ( answer[0] === 'C') {
  //         document.getElementById( 'letterC').innerHTML += letterSelected
  //     } else if ( answer[1] === 'A' ) {
  //         document.getElementById( 'letterA').innerHTML += letterSelected
  //     } else if ( answer[2] === 'T') {
  //         document.getElementById('letterT').innerHTML += letterSelected
  //     }
  // }

  //Option 2
  let pos = 99;
  //if ( answer[0] === 'C' && answer.includes( letterSelected) === true  ) {
  if (answer.includes(letterSelected) === true) {
    pos = answer.indexOf(letterSelected);
    console.log(answer, pos, letterSelected, "1");
  } else {
    console.log(answer.includes(letterSelected), pos);
  }
  if (pos == 0) {
    document.getElementById("letter0").innerHTML += letterSelected;
  } else if (pos == 1) {
    document.getElementById("letter1").innerHTML += letterSelected;
  } else if (pos == 2) {
    document.getElementById("letter2").innerHTML += letterSelected;
  } else {
    if (bodyCount == 1) {
      let changePic = document.getElementById("hangmanpic");
      changePic.src = "./images/one.jpg";
      bodyCount++;
    } else if (bodyCount == 2) {
      let changePic = document.getElementById("hangmanpic");
      changePic.src = "./images/two.jpg";
      bodyCount++;
    }
  }
}
