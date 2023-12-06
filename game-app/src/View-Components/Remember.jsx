import React from 'react'

function Remember({randomNumbers}) {
  return (
    <div className="numbers">
         <h2><strong>Remember this number</strong></h2>
         <p><strong>{randomNumbers}</strong></p>
    </div>
  )
}

export default Remember