
import './App.css';
import Numbers from './Numbers';
import { useState } from "react";
import Instructions from './View-Components/Instructions';
import Remember from './View-Components/Remember';
import InputComponent from './View-Components/InputComponent';
import Results from './View-Components/Results';
import ScoreBoard from './View-Components/ScoreBoard';

let MockHighscores = [
  { name: 'Sam', level: 8, score: 550069 },
  { name: 'Steve', level: 7, score: 550 },
  { name: 'Jack', level: 5, score: 69 },
  { name: 'Simon', level: 8, score: 5500 },
]


const genrateRandomNum = (digitNum) => {
  let tmpString = "";
  for (let i = 0; i < digitNum; i++) {
    let random = Math.floor(Math.random() * 9) + 1;
    tmpString+=random;
}
return tmpString
}

function App() {
  const [currentView,setCurrentView] = useState("Instructions")
  const [randomNumbers, setRandomNumbers] = useState(genrateRandomNum(1));
  const [guessNumbers, setGuessNumbers] = useState('1');
  const [score,setScore] = useState(0)
  const [level,setLevel] = useState(0)
  const [highScores, setHighScores] = useState(MockHighscores);

  const updateHighScores= (newHighScore)=>{
    setHighScores(highScores => [...highScores,newHighScore])
  }
  const onGuess = (userGuess) => {
    setGuessNumbers(userGuess)
  
      if(userGuess==randomNumbers){
        setScore(score+10)
      }
    setLevel(level+1)
    setCurrentView("Results")
  }
  const onLose = () =>{
    setScore(0)
    setLevel(0)
    setRandomNumbers(genrateRandomNum(1))
setCurrentView("Instructions")
  }
  const handleNext = () => {
    setRandomNumbers(guessNumbers + 1)
    setRandomNumbers(genrateRandomNum(level+1))
    setCurrentView("Remember")
  }
  
  return (
    <div  className={`content-container ${currentView === "ScoreBoard" && "board"}`}> 
      {currentView === "Instructions" && (
        <Instructions handleClick={() => setCurrentView("Remember")}/>
      )}
       {currentView === "Remember" && (
        <Remember randomNumbers={randomNumbers} handleTimeUp={() => setCurrentView("InputComponent")}/>
      )}
      {currentView === "InputComponent" && (
        <InputComponent handleGuess={onGuess} />
      )}
       {currentView === "Results" && (
        <Results handleWin={handleNext} handleLose={onLose} guessNumbers={guessNumbers} 
        score={score} level={level} randomNumbers={randomNumbers} goToScoreBoard={() => setCurrentView('ScoreBoard')}
        highScores={highScores} updateHighScores={updateHighScores}/>
      )}
      {currentView === "ScoreBoard" && (
        <ScoreBoard score={score} highScores={highScores} />
      )}
    </div>
    
   
  )
}




export default App;
