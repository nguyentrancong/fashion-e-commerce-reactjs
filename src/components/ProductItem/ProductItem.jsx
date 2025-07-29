import styles from './productItem.module.scss';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart.svg';
import reloadIcon from '@icons/svgs/reload.svg';

function ProductItem({ src, prevSrc, name, price }) {
  const url1 =
    'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg';
  const url2 =
    'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg';

  return (
    <div className={styles.boxImg}>
      <img src={url1} alt='Product image' />
      <img src={url2} alt='Product hover image' className={styles.imgHover} />

      <div className={styles.containerOption}>
        <img src={heartIcon} className={styles.icon} alt='' />
        <img src={reloadIcon} className={styles.icon} alt='' />
        <img src={cartIcon} className={styles.icon} alt='' />
        <img src={heartIcon} className={styles.icon} alt='' />
      </div>
      <div className={styles.title}>10K Yellow Gold</div>
      <div className={styles.price}>$99.99</div>
    </div>
  );
}

export default ProductItem;
