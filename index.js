// test connection - successful
//console.log("hello")

// variables
const keys = document.querySelectorAll(".keys");
let answer = "";
let guessed = [];
let wordStatus = null;
let bodyCount = 1;
let freeCount = 0;

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

// letter input
function validateInput(letterSelected) {
  let pos = 99;

if (answer.includes(letterSelected) === true) {
    pos = answer.indexOf(letterSelected);
    console.log(answer, pos, letterSelected, "1");
    if (pos == 0) {
      document.getElementById("letter0").innerHTML += letterSelected;
      freeCount++;
      console.log("freeCount" + " " + freeCount);
    } else if (pos == 1) {
      document.getElementById("letter1").innerHTML += letterSelected;
      freeCount++;
      console.log("freeCount" + " " + freeCount);
    } else if (pos == 2) {
      document.getElementById("letter2").innerHTML += letterSelected;
      freeCount++;
      console.log("freeCount" + " " + freeCount);
    }

    console.log(answer.includes(letterSelected), pos);

} else {
    if (bodyCount == 1) {
      let changePic = document.getElementById("hangmanpic");
      changePic.src = "./images/one.jpg";
      bodyCount++;
    } else if (bodyCount == 2) {
      let changePic = document.getElementById("hangmanpic");
      changePic.src = "./images/two.jpg";
      bodyCount++;
    } else if (bodyCount == 3) {
      let changePic = document.getElementById("hangmanpic");
      changePic.src = "./images/three.jpg";
      bodyCount++;
    } else if (bodyCount == 4) {
      let changePic = document.getElementById("hangmanpic");
      changePic.src = "./images/four.jpg";
      bodyCount++;
    } else if (bodyCount == 5) {
      let changePic = document.getElementById("hangmanpic");
      changePic.src = "./images/five.jpg";
      bodyCount++;
    } else if (bodyCount == 6) {
      let changePic = document.getElementById("hangmanpic");
      changePic.src = "./images/six.jpg";
      bodyCount++;
    }
}
if (freeCount == 3) {
    let changePic = document.getElementById("hangmanpic");
    changePic.src = "./images/win.jpg";
}
}