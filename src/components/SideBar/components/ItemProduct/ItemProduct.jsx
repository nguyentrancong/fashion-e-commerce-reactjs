import styles from './itemProduct.module.scss';
import { TfiClose } from 'react-icons/tfi';

function ItemProduct() {
  return (
    <div className={styles.contentItem}>
      <img
        src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
        alt=''
      />
      <div className={styles.infoItem}>
        <div className={styles.nameItem}>10K Yellow Gold</div>
        <div className={styles.priceItem}>$99.99</div>
      </div>
      <div className={styles.close}>
        <TfiClose />
      </div>
    </div>
  );
}

export default ItemProduct;
