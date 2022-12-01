// test connection - successful
//console.log("hello")

// variables
let keyboard = document.getElementById("#keyboard");
let answer = '';

// word array
let word = ["wreck", "history", "apple", "walrus"];

// new game button


// image change at wrong guess
function imageChange() {


}


// word randomizer
function wordPick() {
    answer = word[Math.floor(Math.random() * word.length)];

}

wordPick()

// letter buttons
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }

    


