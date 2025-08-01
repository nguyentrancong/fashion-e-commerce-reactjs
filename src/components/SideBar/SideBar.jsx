import { useContext } from 'react';
import styles from './sideBar.module.scss';
import { SideBarContext } from '@contexts/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from './Login/Login';

function SideBar() {
  const { isOpen, setOpen } = useContext(SideBarContext);

  const handleToggle = () => {
    setOpen(!isOpen);
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
        <Login />
      </div>
    </div>
  );
}

export default SideBar;
