import { useState } from "react"


function Results({ guessNumbers, randomNumbers, handleWin, handleLose, score, level, goToScoreBoard, highScores }) {

    const [playerName, setPlayerName] = useState("")
    function handleNewHighScore(e) {
        e.preventDefault()
        const newHighScore = {
            name:playerName,
            score,level
        }
        
        // to do post high score to backend

        console.log(newHighScore)

    }
    const showHighScoreDialog = !highScores[9]|| score > highScores[9]
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
                        <form onSubmit={handleNewHighScore}>
                            <p>Please enter your name to be on the scoreboard</p>
                            <input name="playerName" className="input" autoFocus onChange={e => setPlayerName(e.target.value)} />
                            <button className="sumbit-btn" type="sumbit">Sumbit</button>
                            <button className="No-btn" onClick={goToScoreBoard}>No Thankyou</button>
                        </form>
                    </dialog>
                )}
            </div>
        )
    }

}

export default Results