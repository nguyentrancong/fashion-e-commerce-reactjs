import styles from './footer.module.scss';

import dbCard from '@icons/svgs/creditCard.svg';
import visa from '@icons/svgs/visa.svg';
import mtCard from '@icons/svgs/masterCard.svg';
import paypal from '@icons/svgs/paypal.svg';
import { footerMenu } from './data';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.title}>Marseille</div>
        <div className={styles.subTitle}>XSTROE THEME</div>
      </div>
      <div className={styles.pageLink}>
        {footerMenu.map((item) => {
          return (
            <div className={styles.labelPage} key={item.id}>
              {item.content}
            </div>
          );
        })}
      </div>
      <div className={styles.guaranteed}>
        <div className={styles.titleGuaranteed}>Guaranteed safe ckeckout</div>
        <div className={styles.boxCard}>
          <img src={dbCard} alt='' />
          <img src={visa} alt='' />
          <img src={mtCard} alt='' />
          <img src={paypal} alt='' />
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce
        themes.
      </div>
    </div>
  );
}

export default Footer;
