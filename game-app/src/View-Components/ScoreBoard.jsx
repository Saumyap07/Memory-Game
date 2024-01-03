import { useState } from "react";


function ScoreBoard({ score, highScores, handleLose, hideTryAgain = false }) {
    const highScoreData = highScores?.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });


    return (
        <div className='scoreBoard'>
            <div>
                <h1>ScoreBoard</h1>
                {!hideTryAgain && <p>Your Score : {score}</p>}
            </div>
            <table >
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Level</th>
                    </tr>

                    {highScoreData && highScoreData.map((highscore, index) => (
                        <tr key={highscore.id}>
                            <td>{index + 1}</td>
                            <td>{highscore.name}</td>
                            <td>{highscore.score}</td>
                            <td>{highscore.level}</td>
                        </tr>))}
                </tbody>
            </table>
            {!hideTryAgain &&
                <button className="Lose-btn" id="Lose-btn" onClick={handleLose}>Try Again</button>
            }
        </div>


    )
}


export default ScoreBoard;