import styles from './menu.module.scss';

function Menu({ content, onPress, onTypeChange }) {
  const handlePress = () => {
    if (typeof onPress === 'function' && content === 'Sign in') {
      onPress(true);
      onTypeChange('login');
    }
  };
  return (
    <div className={styles.menu} onClick={handlePress}>
      {content}
    </div>
  );
}

export default Menu;
