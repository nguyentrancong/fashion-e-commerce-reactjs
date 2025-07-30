import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import styles from './homePage.module.scss';
import Banner from '@components/Banner/Banner';
import Header from '@components/Header/header';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/api/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    const data = await getProducts();
    setProducts(data.contents);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <Info />

      <AdvanceHeading />
      <HeadingListProduct products={products} />
      <PopularProduct products={products} />
    </div>
  );
}

export default HomePage;
