import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './headingListProduct.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct({ products }) {
  return (
    <MainLayout>
      <div className={styles.container}>
        <CountdownBanner />
        <div className={styles.itemsLeft}>
          {products.slice(0, 2).map((item) => {
            return (
              <ProductItem
                key={item._id}
                name={item.name}
                price={item.price}
                src={item.images[0]}
                prevSrc={item.images[1]}
              />
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
