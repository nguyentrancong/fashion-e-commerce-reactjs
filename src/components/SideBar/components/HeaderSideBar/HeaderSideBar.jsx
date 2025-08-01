import styles from './headerSideBar.module.scss';

function HeaderSideBar({ icon, title }) {
  return (
    <div className={styles.container}>
      {icon}
      <div className={styles.title}>{title}</div>
      <div className={styles.line} />
    </div>
  );
}

export default HeaderSideBar;
