// test connection - successful
//console.log("hello")

// variables
const keys = document.querySelectorAll(".keys");
let answer = "";

// word array
let word = ["wreck", "history", "apple", "walrus"];

// new game button

// image change at wrong guess
function imageChange() {}

// word randomizer
function wordPick() {
  answer = word[Math.floor(Math.random() * word.length)];

}

wordPick();

// keyboard buttons opacity
addEventListener("click", ( event ) => {
    let selectedButton = document.getElementById( event.target.id )
    console.log( 'button', selectedButton)
    selectedButton.style.opacity = '.5'
});


