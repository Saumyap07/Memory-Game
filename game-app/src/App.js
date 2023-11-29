
import './App.css';
import Numbers from './Numbers';
import { useState } from "react";

function App() {

  const [remember, setRemeber] = useState(0);
  const handleClick = () => {
    setRemeber(1)
  }

  if (remember == 0) {
    return (
      <div className="intructions">
        <p><strong>Memory Game</strong> <br />
          Lets see how good is your Memory<br /><br />
          Instructions: You will have to remember numbers that show up
          on your Screen within 5 seconds. Each time you get the numbers
          correctly the program will increase the difficulty up a level
          The game goes up to 10 levels and you will get 10 points for
          getting each question right. If you guess the numbers wrong
          you will have to restart the game.
        </p>
        <button className="start-btn" id="start-btn" onClick={handleClick}>Start</button>
      </div>
    )
  }
  else{
    return <Numbers/>
  }

}




export default App;
