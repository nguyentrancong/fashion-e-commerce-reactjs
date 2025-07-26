import { useEffect, useState } from 'react';
import styles from './countdownTimer.module.scss';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let time = {};

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return time;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (number) => {
    return String(number).padStart(2, '0');
  };

  //   return <div>CountdownTimer</div>;

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] != undefined) {
      timerComponents.push(
        <span key={interval} className={styles.box}>
          <span className={styles.value}>
            {formatNumber(timeLeft[interval])}
          </span>
          <span className={styles.label}>{interval}</span>
        </span>
      );
    }
  });

  return <div className={styles.container}>{timerComponents}</div>;
}

export default CountdownTimer;
