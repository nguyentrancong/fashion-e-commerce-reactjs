import { useContext } from 'react';
import styles from './sideBar.module.scss';
import { SideBarContext } from '@contexts/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from './Login/Login';
import Compare from './Compare/Compare';

function SideBar() {
  const { isOpen, setOpen, type } = useContext(SideBarContext);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const handleRenderContent = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wishlist':
        return 'wishlist';
      case 'cart':
        return 'cart';
      default:
        return 'none';
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={classNames({ [styles.overlay]: isOpen })}
        onClick={handleToggle}
      ></div>
      <div
        className={classNames(styles.sideBar, {
          [styles.slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={styles.boxIcon} onClick={handleToggle}>
            <TfiClose />
          </div>
        )}
        {/* <Login /> */}
        {handleRenderContent()}
      </div>
    </div>
  );
}

export default SideBar;
