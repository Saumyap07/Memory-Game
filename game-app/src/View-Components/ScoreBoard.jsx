import { useState } from "react";


function ScoreBoard({score, highScores,}) {
    const highScoreData = highScores?.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });


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

                {highScoreData.map((highscore, index) => (
                <tr key={highscore.id}>
                    <td>{index + 1}</td>
                    <td>{highscore.name}</td>
                    <td>{highscore.score}</td>
                    <td>{highscore.level}</td>
                </tr>))}
            </tbody>
        </table>
        </> 
        

    )
}


export default ScoreBoard;