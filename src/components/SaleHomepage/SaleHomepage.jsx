import styles from './saleHomepage.module.scss';
import Button from '@components/Button/Button';
import useTranslateXImage from '@/hooks/useTranslateXImage';

function SaleHomepage() {
  const { translateXPosition } = useTranslateXImage();

  return (
    <div className={styles.container}>
      <div
        className={styles.boxImg}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: `transform 0.6s ease`,
        }}
      >
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
          alt=''
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Sale of the year</div>
        <div className={styles.description}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </div>

        <Button content={'Read more'} isPrimary={false} />
      </div>
      <div
        className={styles.boxImg}
        style={{
          transform: `translateX(${-translateXPosition}px)`,
          transition: `transform 0.6s ease`,
        }}
      >
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
          alt=''
        />
      </div>
    </div>
  );
}

export default SaleHomepage;
