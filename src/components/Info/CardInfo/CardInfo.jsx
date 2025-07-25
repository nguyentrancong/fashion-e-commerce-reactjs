import styles from './cardInfo.module.scss';

function CardInfo({ title, des, src }) {
  return (
    <div className={styles.containerCard}>
      <img width={40} height={40} src={src} alt='' />
      <div className={styles.containerContent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.des}>{des}</div>
      </div>
    </div>
  );
}

export default CardInfo;
