let randomNumbers = "";
let guessedNumbers = "";
let size = 3;
let level = 1;
let guess = 0;
let randomestart = 0;
let score = 0;

function gameResults(Num) {
  let random = 0;
  for (let i = 0; i < intNum; i++) {
    random = Math.floor(Math.random() * 9) + 1;
    randomNumbers += random;
  }
}
let startBtn = document.getElementById("start-btn")


function main() {
  startBtn.addEventListener("click", function(){
    console.log("hi")
    console.log("rememeber this numbers:", randomNumbers)

    setTimeout(function(){
      console.log("hi")
      //get the random numbers for the user then display the numbers 
      //and after 5 seconds remove that from the screen 
    },5000);


    console.log("Clicked")
  })
}
main();


function startRound(level, size) {
  // initialize values for this round, eg. randomNumbers
  // display those numbers to the user
  // after 500ms hide numbers from user
  // prompt user to guess numbers
  // give user results of guess
  // next round ?? try again
}