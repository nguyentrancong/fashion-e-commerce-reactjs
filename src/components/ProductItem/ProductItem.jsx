import styles from './productItem.module.scss';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart.svg';
import reloadIcon from '@icons/svgs/reload.svg';

function ProductItem({ src, prevSrc, name, price }) {
  return (
    <div className={styles.boxImg}>
      <img src={src} alt='Product image' />
      <img
        src={prevSrc}
        alt='Product hover image'
        className={styles.imgHover}
      />

      <div className={styles.containerOption}>
        <img src={heartIcon} className={styles.icon} alt='' />
        <img src={reloadIcon} className={styles.icon} alt='' />
        <img src={cartIcon} className={styles.icon} alt='' />
        <img src={heartIcon} className={styles.icon} alt='' />
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.price}>{`$${price}`}</div>
    </div>
  );
}

export default ProductItem;
