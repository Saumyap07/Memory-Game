import { useState } from "react"


function Results({ guessNumbers, randomNumbers, handleWin, handleLose, score, level, goToScoreBoard, highScores,
                   updateHighScores  }) {

    const [playerName, setPlayerName] = useState("")
    function handleNewHighScore() {
        const newHighScore = {
            name:playerName,
            score,level
        }
        
        // to do post high score to backend
        updateHighScores(newHighScore)
        console.log(newHighScore)
        goToScoreBoard()

    }

    console.log("Results component")

   

    if (guessNumbers == randomNumbers) {
        return (
            <div className="Win">
                <h2>Number</h2>
                <p>{randomNumbers}</p>
                <h2>Your Number</h2>
                <p>{guessNumbers}</p>
                <p>Score : {score}</p>
                <p>Level {level}</p>
                <button className="Win-btn" id="Win-btn" onClick={handleWin}>Next</button>
            </div>
        )
    }
    if (guessNumbers != randomNumbers) {
        const showHighScoreDialog = !highScores[9]|| score > highScores[9];
        console.log('lose view')
        return (
            <div className="Lose">
                <h2>Number</h2>
                <p>{randomNumbers}</p>
                <h2>Your Number</h2>
                <p>{guessNumbers}</p>
                <p>Score : {score}</p>
                <p>Level {level}</p>
                <button className="Lose-btn" id="Lose-btn" onClick={handleLose}>Try Again</button>
                <button className="Lose-btn" id="Lose-btn" onClick={goToScoreBoard}>Scoreboard</button>
                {showHighScoreDialog && (
                    <dialog open>
                        <p>Congratulations you got an highscore</p>
                        <p>Please enter your name to be on the scoreboard</p>
                        <input
                            name="playerName"
                            className="input"
                            autoFocus
                            onChange={e => setPlayerName(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key == 'Enter') {
                                  handleNewHighScore()
                                }
                              }}     
                        />
                        <button className="sumbit-btn" type="button" onClick={handleNewHighScore}>Sumbit</button>
                        <button className="No-btn" type="button" onClick={goToScoreBoard}>No Thankyou</button>
                    </dialog>
                )}
            </div>
        )
    }

}

export default Results