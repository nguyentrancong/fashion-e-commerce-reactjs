import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constanst';
import styles from './style.module.scss';

import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart.svg';
import reloadIcon from '@icons/svgs/reload.svg';
import Menu from './Menu/Menu';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.containerRight}>
          <div className={styles.containerBoxIcon}>
            {dataBoxIcon.map((item) => {
              return (
                <BoxIcon key={item.type} type={item.type} href={item.href} />
              );
            })}
          </div>
          <div className={styles.containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return (
                <Menu
                  key={item.content}
                  content={item.content}
                  href={item.href}
                />
              );
            })}
          </div>
        </div>
        <div>Logo</div>
        <div className={styles.containerLeft}>
          <div className={styles.containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item) => {
              return (
                <Menu
                  key={item.content}
                  content={item.content}
                  href={item.href}
                />
              );
            })}
          </div>
          <div className={styles.containerBoxIcon}>
            <img src={reloadIcon} alt='reloadIcon' height={26} width={26} />
            <img src={heartIcon} alt='heart' height={26} width={26} />
            <img src={cartIcon} alt='Cart' height={26} width={26} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
