import classNames from 'classnames';
import styles from './button.module.scss';

function Button({ content, isPrimary = true }) {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.primaryBtn]: isPrimary,
        [styles.secondBtn]: !isPrimary,
      })}
    >
      {content}
    </button>
  );
}

export default Button;
