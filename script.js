let randomNumbers = "";
let guessedNumbers = "";
let Size = 3;
let Level = 1;
let Guess = 0;
let Restart = 0;
let Score = 0;

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

    function rememberNum(){
      console.log("rememeber this numbers:", randomNumbers)
    }
    setTimeout(function(){
      console.log("hi")
      //get the random numbers for the user then display the numbers 
      //and after 5 seconds remove that from the screen 
    },5000);


    console.log("Clicked")
  })
}
main();


