
import './App.css';
import Numbers from './Numbers';
import { useState } from "react";
import Instructions from './View-Components/Instructions';
import Remember from './View-Components/Remember';

function App() {
  const [currentView,setCurrentView] = useState("Instructions")
  const [randomNumbers, setRandomNumbers] = useState('0');
  const [guessNumbers, setGuessNumbers] = useState('1');

  return (
    <div> 
      {currentView === "Instructions" && (
        <Instructions handleClick={() => setCurrentView("Remember")}/>
      )}
       {currentView === "Remember" && (
        <Remember randomNumbers={randomNumbers}/>
      )}
    </div>
    
   
  )
}




export default App;
