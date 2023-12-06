
import './App.css';
import Numbers from './Numbers';
import { useState } from "react";
import Instructions from './View-Components/Instructions';
import Remember from './View-Components/Remember';
import InputComponent from './View-Components/InputComponent';
import Results from './View-Components/Results';

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
    <div  className='content-container'> 
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
        score={score} level={level} randomNumbers={randomNumbers}/>
      )}
    </div>
    
   
  )
}




export default App;
