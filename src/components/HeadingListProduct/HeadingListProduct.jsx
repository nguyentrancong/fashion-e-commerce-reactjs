import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './headingListProduct.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <CountdownBanner />
        <div className={styles.itemsLeft}>
          <ProductItem key={1} />
          <ProductItem key={2} />
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
