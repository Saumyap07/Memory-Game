

function Results({ guessNumbers, randomNumbers, handleWin, handleLose, score, level, handleScore }) {

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
                <button className="Lose-btn" id="Lose-btn" onClick={handleScore}>Scoreboard</button>
                {/* To do: Add High score component here */}
            </div>
        )
    }

}

export default Results