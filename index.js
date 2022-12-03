// test connection - successful
//console.log("hello")

// variables
const keys = document.querySelectorAll(".keys");
let answer = "";
let guessed = [];
let wordStatus = null;


// word array
let word = ["wreck", "history", "apple", "walrus"];


// word randomizer
function randomWord() {
  answer = word[Math.floor(Math.random() * word.length)];
}

randomWord()

// keyboard buttons opacity
addEventListener("click", ( event ) => {
    let selectedButton = document.getElementById( event.target.id )
    console.log( 'button', selectedButton)
    selectedButton.style.opacity = '.5'
});

// word to guess
function guessWord () {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('')
    document.getElementById('wordSpotlight').innerHTML = wordStatus
}

guessWord()

// new game button