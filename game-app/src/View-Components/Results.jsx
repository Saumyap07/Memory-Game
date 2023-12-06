let Score = 0;
let Level = 0;

function Results (){
    c
    if(guessNumbers == randomNumbers){
        Score += 10;
        Level += 1;
     return ( <div>
        <h2>Number</h2>
        <p>{randomNumbers}</p>
        <h2>Your Number</h2>
        <p>{guessNumbers}</p>
        <p>Score : {Score}</p>
        <p>Level {Level}</p>
    </div>
    ) 
    }
    if(guessNumbers != randomNumbers){
        Level += 1;
     return ( <div>
        <h2>Number</h2>
        <p>{randomNumbers}</p>
        <h2>Your Number</h2>
        <p>{guessNumbers}</p>
        <p>Score : {Score}</p>
        <p>Level {Level}</p>
    </div>
    ) 
    }
  }

  export default Results