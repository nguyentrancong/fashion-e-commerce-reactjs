import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './countdownBanner.module.scss';
import Button from '@components/Button/Button';

function CountdownBanner() {
  const targetDate = '2025-07-30T00:00:00';

  return (
    <div className={styles.container}>
      <CountdownTimer targetDate={targetDate} />
      <div className={styles.title}>The classics make a comeback</div>
      <Button content={'Buy now'} />
    </div>
  );
}

export default CountdownBanner;
