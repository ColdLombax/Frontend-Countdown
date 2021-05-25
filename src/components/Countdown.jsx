import React, { useEffect, useState } from 'react';
import BoxItem from './BoxItem';

import './Countdown.scss';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`10/01/${year}`) - +new Date();
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  };

  // eslint-disable-next-line no-unused-vars
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <main>
      <BoxItem label="days" value={timeLeft.days} />
      <BoxItem label="hours" value={timeLeft.hours} />
      <BoxItem label="minutes" value={timeLeft.minutes} />
      <BoxItem label="seconds" value={timeLeft.seconds} />
    </main>
  );
};

export default Countdown;
