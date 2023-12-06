import { useEffect, useState } from "react";


let Score = 0;
let Level = 0;
function Numbers() {
    const [randomNumbers, setRandomNumbers] = useState('');
    const [guessNumbers, setGuessNumbers] = useState('');
    const [timesUp, setTimesUp] = useState(false);

    let tmpString = []

    useEffect(() => {
        if (tmpString.length < 3) {
            for (let i = 0; i < 3; i++) {
                let tmpNum = Math.floor(Math.random() * 9) + 1;
                tmpString += tmpNum
            }
            setRandomNumbers(tmpString)
        }

        if (!timesUp) {
            setTimeout(() => {
                setTimesUp(true)
            }, 5000)
        }

    }, [])
    const handleChange = (e) => {
       setGuessNumbers(e.target.value);
      };

      function Results (){
        if(guessNumbers == randomNumbers){
            Score += 10;
            Level += 1;
         return ( <div>
            <h2>Number</h2>
            <p>{randomNumbers}</p>
            <h2>Your Number</h2>
            <p>{guessNumbers}</p>
            <p>Score : {Score}</p>
            <p>Level {Level}</p>
        </div>
        ) 
        }
        if(guessNumbers != randomNumbers){
            Level += 1;
         return ( <div>
            <h2>Number</h2>
            <p>{randomNumbers}</p>
            <h2>Your Number</h2>
            <p>{guessNumbers}</p>
            <p>Score : {Score}</p>
            <p>Level {Level}</p>
        </div>
        ) 
        }
      }
     

    console.log(randomNumbers);
    return (
        <>
        { !timesUp ?
            <div className="numbers">
                <h2><strong>Remember this number</strong></h2>
                <p><strong>{randomNumbers}</strong></p>
            </div>
            
            : <div className="guess">
            <h2><strong>What was the number?</strong></h2>
            <h4 className="sumbit">Press enter to sumbit</h4>
            <input className="input" 

            value={guessNumbers}
            onChange ={handleChange}
            onKeyDown={(e) => {
                if (e.key == 'Enter') console.log(guessNumbers)
            }}/>
        </div>
         }
        </>
    )
}




export default Numbers;