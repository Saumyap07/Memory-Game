import React from 'react'

function Remember({randomNumbers,handleTimeUp}){

    setTimeout(() => {
        handleTimeUp()
    }, 5000)

  return (
    <div className="numbers">
         <h2><strong>Remember this number</strong></h2>
         <p><strong>{randomNumbers}</strong></p>
    </div>
  )
}

export default Remember