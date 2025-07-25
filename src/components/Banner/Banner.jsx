import Button from '@components/Button/Button';
import styles from './banner.module.scss';

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>XStore Marseille04 Demo</h1>
        <div className={styles.des}>
          Make yours celebrations even more special this years with beautiful.
        </div>

        <Button content={'Go to shop'} />
      </div>
    </div>
  );
}

export default Banner;
