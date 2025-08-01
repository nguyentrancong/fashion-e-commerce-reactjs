import classNames from 'classnames';
import styles from './button.module.scss';

function Button({ content, isPrimary = true, onPress, btStyles = null }) {
  const handleTapped = () => {
    onPress && onPress();
  };

  return (
    <button
      className={classNames(styles.btn, {
        [styles.primaryBtn]: isPrimary,
        [styles.secondBtn]: !isPrimary,
        [btStyles]: !btStyles,
      })}
      onClick={handleTapped}
    >
      {content}
    </button>
  );
}

export default Button;
