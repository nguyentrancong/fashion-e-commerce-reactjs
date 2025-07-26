import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import styles from './homePage.module.scss';
import Banner from '@components/Banner/Banner';
import Header from '@components/Header/header';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';

function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <Info />

      <AdvanceHeading />
      <HeadingListProduct />
    </div>
  );
}

export default HomePage;
