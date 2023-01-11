import React, { useState, useEffect } from 'react';

const CountDown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dateDiff = new Date(date) - new Date();
      if (dateDiff <= 0) {
        clearInterval(intervalId);
        return;
      }

      setTimeLeft({
        days: Math.floor(dateDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((dateDiff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((dateDiff / 1000 / 60) % 60),
        seconds: Math.floor((dateDiff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <>
    <p>Time remaining to Ramedan:</p>
    <p>{timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds</p>
    </>
  );
};

export default CountDown;
