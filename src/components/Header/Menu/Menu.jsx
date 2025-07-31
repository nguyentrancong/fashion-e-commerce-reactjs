import styles from './menu.module.scss';

function Menu({ content, onPress }) {
  return (
    <div
      className={styles.menu}
      onClick={() => {
        if (typeof onPress === 'function') {
          onPress(true);
        }
      }}
    >
      {content}
    </div>
  );
}

export default Menu;
