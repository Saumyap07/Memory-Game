import React, { useEffect, useState } from 'react';

const Timer = ({ totalTime, handleTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if (timeLeft == -1) {
      handleTimeUp()
    }

  }, [timeLeft])

  const timerWidth = (timeLeft / (totalTime - 1)) * 100;

  return (
    <div>
      <div
        className="timer-bar"
        style={{ width: `${timerWidth}%` }}
      ></div>
    </div>
  );
};

export default Timer;

