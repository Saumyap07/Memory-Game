
import './App.css';
import Numbers from './Numbers';
import { initializeApp } from 'firebase/app';
import { query, collection, orderBy, limit, getFirestore } from 'firebase/firestore';
import { useState } from "react";
import Instructions from './View-Components/Instructions';
import Remember from './View-Components/Remember';
import InputComponent from './View-Components/InputComponent';
import Results from './View-Components/Results';
import ScoreBoard from './View-Components/ScoreBoard';
import firebaseConfig from './notSecret'
import { useCollection } from 'react-firebase-hooks/firestore';
import { addDoc, serverTimestamp } from 'firebase/firestore';



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const HighscoresCollection = collection(db, 'Highscores')

const highScoresQuery = query(
  HighscoresCollection,
  orderBy('score', 'desc'),
  limit(10),
);


const genrateRandomNum = (digitNum) => {
  let tmpString = "";
  for (let i = 0; i < digitNum; i++) {
    let random = Math.floor(Math.random() * 9) + 1;
    tmpString += random;
  }
  return tmpString
}

function App() {
  const [currentView, setCurrentView] = useState("Instructions")
  const [randomNumbers, setRandomNumbers] = useState(genrateRandomNum(1));
  const [guessNumbers, setGuessNumbers] = useState('1');
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(0)
  const [highScores, loading, error] = useCollection(highScoresQuery);

  const updateHighScores = (newHighScore) => {

    addDoc(HighscoresCollection, {
      createdAt: serverTimestamp(),
      ...newHighScore
    });
  }
  const onGuess = (userGuess) => {
    setGuessNumbers(userGuess)

    if (userGuess == randomNumbers) {
      setScore(score + 10)
    }
    setLevel(level + 1)
    setCurrentView("Results")
  }
  const onLose = () => {
    setScore(0)
    setLevel(0)
    setRandomNumbers(genrateRandomNum(1))
    setCurrentView("Instructions")
  }
  const handleNext = () => {
    setRandomNumbers(guessNumbers + 1)
    setRandomNumbers(genrateRandomNum(level + 1))
    setCurrentView("Remember")
  }

  return (
    <div className={`content-container  ${currentView === "Instructions" && "removeBg"} ${currentView === "ScoreBoard" && "board"}`}>
      {currentView === "Instructions" && (
        <div className='homePage'>
          <Instructions handleClick={() => setCurrentView("Remember")} />
          <ScoreBoard score={score} highScores={highScores} handleLose={onLose} hideTryAgain={true} />
        </div>
      )}
      {currentView === "Remember" && (
        <Remember randomNumbers={randomNumbers} handleTimeUp={() => setCurrentView("InputComponent")} />
      )}
      {currentView === "InputComponent" && (
        <InputComponent handleGuess={onGuess} />
      )}
      {currentView === "Results" && (
        <Results handleWin={handleNext} handleLose={onLose} guessNumbers={guessNumbers}
          score={score} level={level} randomNumbers={randomNumbers} goToScoreBoard={() => setCurrentView('ScoreBoard')}
          highScores={highScores} updateHighScores={updateHighScores} />
      )}
      {currentView === "ScoreBoard" && !loading && (
        <ScoreBoard score={score} highScores={highScores} handleLose={onLose} />
      )}
    </div>


  )
}




export default App;
