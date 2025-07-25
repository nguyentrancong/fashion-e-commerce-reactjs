import styles from './homePage.module.scss';
import Banner from '@components/Banner/Banner';
import Header from '@components/Header/header';

function HomePage() {
  return (
    <div>
      <div className={styles.containerHeader}>
        <Header />
        <Banner />
      </div>
    </div>
  );
}

export default HomePage;
