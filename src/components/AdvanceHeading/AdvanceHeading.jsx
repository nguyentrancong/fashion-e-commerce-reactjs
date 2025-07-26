import styles from './advanceHeading.module.scss';
import MainLayout from '@components/Layout/Layout';

function AdvanceHeading() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.des}>don't miss super offers</div>

        <div className={styles.content}>
          <div className={styles.headline}></div>
          <div className={styles.title}>Our best products</div>
          <div className={styles.headline}></div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AdvanceHeading;
