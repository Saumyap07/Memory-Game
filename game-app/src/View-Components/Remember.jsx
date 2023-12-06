import React from 'react'
import Timer from './Timer.js'

function Remember({randomNumbers,handleTimeUp}){

  return (
    <div className="numbers">
         <h2><strong>Remember this number</strong></h2>
         <p className='random'><strong>{randomNumbers}</strong></p>
         <Timer totalTime={5} handleTimeUp={handleTimeUp}/>

    </div>
  )
}

export default Remember