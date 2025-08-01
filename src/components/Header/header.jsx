import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constanst';
import styles from './style.module.scss';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import Menu from './Menu/Menu';
import useScrollHandling from '@hooks/useScrollHanding';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@contexts/SideBarProvider';

function Header() {
  const { scrollPosition } = useScrollHandling();
  const { setOpen, setType } = useContext(SideBarContext);

  const [isFixed, setFixed] = useState(false);

  const handleOpenSideBar = (type) => {
    setOpen(true);
    setType(type);
  };

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
                  onTypeChange={setType}
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
                  onTypeChange={setType}
                />
              );
            })}
          </div>
          <div className={styles.containerBoxIcon}>
            <TfiReload
              style={{ fontSize: '16px' }}
              onClick={() => {
                handleOpenSideBar('compare');
              }}
            />
            <FaRegHeart
              style={{ fontSize: '16px' }}
              onClick={() => {
                handleOpenSideBar('wishlist');
              }}
            />
            <BsCart3
              style={{ fontSize: '16px' }}
              onClick={() => {
                handleOpenSideBar('cart');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
