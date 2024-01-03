import React from 'react'

function Instructions({ handleClick, highScoreData, }) {
  return (
    <div className="intructions">
      <h1>Memory Game</h1>
      <h3>Lets see how good is your Memory</h3>
      <strong>Instructions</strong> <br />
      <ul>
        <li>You will have to remember numbers that show up on your Screen within 8 seconds.</li>
        <li>Each time you get the numbers correctly the program will increase the difficulty up a level.</li>
        <li>The game goes up to 10 levels and you will get 10 points for getting each question right.</li>
        <li>If you guess the numbers wrong you will have to restart the game.</li>
      </ul>
      <button className="start-btn" id="start-btn" onClick={handleClick}>Start</button>

    </div>



  )
}

export default Instructions