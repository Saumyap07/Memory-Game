import { useEffect, useState } from "react";

function Numbers() {
    const [randomNumbers, setRandomNumbers] = useState('');
    let tmpString = []

    useEffect(() => {
        if (tmpString.length < 3) {
            for (let i = 0; i < 3; i++) {
                let tmpNum = Math.floor(Math.random() * 9) + 1;
                tmpString += tmpNum
            }
            setRandomNumbers(tmpString)
        }

    }, [])

    console.log(randomNumbers);
    return (
        <>
        <div className="numbers">
            <h2><strong>Remember this number</strong></h2>
            <p><strong>{randomNumbers}</strong></p>
        </div>
        <div className="guess">
        <h2><strong>What was the number?</strong></h2>
        <h4 className="sumbit">Press enter to sumbit</h4>
        <input className="input"></input>
    </div>
    </>
    )
}




export default Numbers;