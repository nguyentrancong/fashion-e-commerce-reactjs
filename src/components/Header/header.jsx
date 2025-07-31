import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constanst';
import styles from './style.module.scss';

import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart.svg';
import reloadIcon from '@icons/svgs/reload.svg';
import Menu from './Menu/Menu';
import useScrollHandling from '@hooks/useScrollHanding';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@contexts/SideBarProvider';

function Header() {
  const { scrollPosition } = useScrollHandling();
  const { setOpen } = useContext(SideBarContext);

  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    if (scrollPosition > 80) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, [scrollPosition]);

  return (
    <div
      className={classNames(styles.container, styles.top, {
        [styles.fixed]: isFixed,
      })}
    >
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
                  onPress={setOpen}
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
                  onPress={setOpen}
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
