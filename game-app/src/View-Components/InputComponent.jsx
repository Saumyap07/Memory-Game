import React, { useState } from 'react'

function InputComponent({ handleGuess }) {
  return (
    <div className="guess">

      <h2><strong>What was the number?</strong></h2>
      <h4 className="sumbit">Press enter to submit</h4>
      <input className="input" autoFocus type='number'

        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            handleGuess(e.target.value)
          }
        }} />
    </div>
  )
}

export default InputComponent