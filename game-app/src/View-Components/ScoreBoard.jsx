import { useState } from "react";


function ScoreBoard({score, highScores}) {
    console.log(highScores)
    return (
        <>
        <div>
            <h1>ScoreBoard</h1>
            <p>Your Score : {score}</p>
        </div>
        <table >
            <tbody>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Level</th>
                </tr>

                {highScores.map((highScore, index) => (<tr>
                    <td>{index + 1}</td>
                    <td>{highScore.name}</td>
                    <td>{highScore.score}</td>
                    <td>{highScore.level}</td>
                </tr>))}
            </tbody>
        </table>
        </> 
        

    )
}


export default ScoreBoard;