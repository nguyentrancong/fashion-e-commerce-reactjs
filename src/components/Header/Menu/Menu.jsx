import styles from './menu.module.scss';

function Menu({ content, href }) {
  return <div className={styles.menu}>{content}</div>;
}

export default Menu;
