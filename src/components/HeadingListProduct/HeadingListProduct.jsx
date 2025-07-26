import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './headingListProduct.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';

function HeadingListProduct() {
  //   const targetDate = '2025-07-30T00:00:00';

  return (
    <MainLayout>
      {/* HeadingListProduct */}
      {/* <CountdownTimer targetDate={targetDate} /> */}

      <div className={styles.container}>
        {/* <div>Count down time</div> */}
        <CountdownBanner />
        <div className={styles.itemsLeft}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
