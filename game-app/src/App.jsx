
import './App.css';
import Numbers from './Numbers';
import { useState } from "react";
import Instructions from './View-Components/Instructions';
import Remember from './View-Components/Remember';
import InputComponent from './View-Components/InputComponent';

function App() {
  const [currentView,setCurrentView] = useState("InputComponent")
  const [randomNumbers, setRandomNumbers] = useState('0');
  const [guessNumbers, setGuessNumbers] = useState('1');
  console.log(guessNumbers)
  const onGuess = (userGuess) => {
    setGuessNumbers(userGuess)
    setCurrentView("Results")
  }
  return (
    <div> 
      {currentView === "Instructions" && (
        <Instructions handleClick={() => setCurrentView("Remember")}/>
      )}
       {currentView === "Remember" && (
        <Remember randomNumbers={randomNumbers} handleTimeUp={() => setCurrentView("InputComponent")}/>
      )}
      {currentView === "InputComponent" && (
        <InputComponent handleGuess={onGuess} />
      )}
    </div>
    
   
  )
}




export default App;
