import MainLayout from '@components/Layout/Layout';
import styles from './popularProduct.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

function PopularProduct({ products }) {
  return (
    <MainLayout>
      <div className={styles.container}>
        {products.slice(2, products.length).map((item) => {
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
    </MainLayout>
  );
}

export default PopularProduct;
